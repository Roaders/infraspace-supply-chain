import { FactoryLookup, IFactory, Material, Materials } from '../contracts';
import { buildings as buildingsImport } from './buildings';
import { gameConfig } from './gameConfig';

const residenceTypes: (IResidence | undefined)[] = [
    undefined, // in game config index 0 is empty
    { name: 'Basic Habitat', capacity: 8 },
    { name: 'Decent Habitat', capacity: 10 },
    { name: 'Nice Habitat', capacity: 12 },
    { name: 'Residential Building', capacity: 14 },
    { name: 'Residential Highrise', capacity: 16 },
    { name: 'Luxury Residential Highrise', capacity: 18 },
];

interface IResourceCount {
    resourceName: Material;
    amount: number;
}

interface IConfigFactory {
    name: string;
    costs: IResourceCount[];
    productionLogic: {
        type: 'factory';
        productionDefinition: {
            consumables: IResourceCount[];
            producables: IResourceCount[];
            timeSteps: number;
            powerOutput?: number;
            powerNeeded: number;
            maxWorkers: number;
        };
    };
}

interface IResourceFactory {
    resourceName: Material;
    consumptionFactor: number;
}

interface IResidence {
    name: string;
    capacity: number;
}

const buildings: unknown[] = Object.entries(buildingsImport).map(([name, building]) => ({
    name,
    ...building,
}));

export const factoryLookup: FactoryLookup = buildLookup();

function buildLookup(): FactoryLookup {
    const factories = parseFactories();

    return { ...factories, citizen: parseResidencies(factories) };
}

function parseResidencies(factories: FactoryLookup): [IFactory<'citizen'>, ...IFactory<'citizen'>[]] | undefined {
    const residences = residenceTypes
        .map((residence, index) =>
            mapResidence(residence, gameConfig.habitat.requiredResources[index] as IResourceFactory[], factories)
        )
        .filter(isDefined);

    const first = residences.shift();

    if (first != null) {
        return [first, ...residences];
    }

    return undefined;
}

function mapResidence(
    residence: IResidence | undefined,
    resources: IResourceFactory[],
    factories: FactoryLookup
): IFactory<'citizen'> | undefined {
    if (residence == null) {
        return undefined;
    }

    const input = resources
        .filter((resource) => factories[resource.resourceName] != null)
        .reduce<Partial<Record<Material, number>>>(
            (lookup, resource) => ({ ...lookup, [resource.resourceName]: resource.consumptionFactor }),
            {}
        );

    return {
        buildCost: { concrete: 10 },
        duration: 60,
        name: residence.name,
        output: { citizen: residence.capacity },
        power: 0,
        workers: 0,
        input,
    };
}

function parseFactories(): FactoryLookup {
    return Materials.reduce<FactoryLookup>((lookup, material) => {
        const factories = findMaterialFactories(material);

        if (factories != null) {
            lookup = { ...lookup, [material]: factories };
        }

        return lookup;
    }, {});
}

function findMaterialFactories<M extends Material>(material: M): [IFactory<M>, ...IFactory<M>[]] | undefined {
    const materialFactories = buildings
        .filter(isConfigFactory)
        .filter(
            (factory) =>
                factory.productionLogic.productionDefinition.producables.some(
                    (resource) => resource.resourceName === material
                ) ||
                (material === 'power' && factory.productionLogic.productionDefinition.powerOutput != null)
        );

    const first = materialFactories.shift();

    if (first != null) {
        return [mapFactory<M>(first), ...materialFactories.map(mapFactory)];
    }

    return undefined;
}

function mapFactory<M extends Material>(building: IConfigFactory): IFactory<M> {
    const production = building.productionLogic.productionDefinition;

    const buildCost = building.costs.reduce<Partial<Record<Material, number>>>(
        (lookup, cost) => ({ ...lookup, [cost.resourceName]: cost.amount }),
        {}
    );
    const output = production.producables.reduce<Partial<Record<Material, number>>>(
        (lookup, cost) => ({ ...lookup, [cost.resourceName]: cost.amount }),
        {}
    );
    const input =
        production.consumables.length > 0
            ? production.consumables.reduce<Partial<Record<Material, number>>>(
                  (lookup, cost) => ({ ...lookup, [cost.resourceName]: cost.amount }),
                  {}
              )
            : undefined;

    if (production.powerOutput != null) {
        output.power = production.powerOutput;
    }

    return {
        name: building.name,
        duration: production.timeSteps / 5000,
        workers: production.maxWorkers,
        buildCost,
        power: production.powerNeeded,
        output: output as any,
        input,
    };
}

function isConfigFactory(value: unknown): value is IConfigFactory {
    const factory = value as IConfigFactory;

    return factory.productionLogic?.type === 'factory' && Array.isArray(factory.costs);
}
function isDefined<T>(value: T | null | undefined): value is T {
    return value != null;
}
