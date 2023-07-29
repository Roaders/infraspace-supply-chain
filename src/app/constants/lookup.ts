import { FactoryLookup, IFactory, Material, Materials } from '../contracts';
import { buildings as buildingsImport } from './buildings';
import { gameConfig } from './gameConfig';

const residenceNames: (string | undefined)[] = [
    undefined, // in game config index 0 is empty
    'Basic Habitat',
    'Decent Habitat',
    'Nice Habitat',
    'Residential Building',
    'Residential Highrise',
    'Luxury Residential Highrise',
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

interface IConfigHabitat {
    productionLogic: {
        type: 'habitat';
        habitatLevel: number;
        maxInhabitants: number;
    };
}

interface IResourceFactory {
    resourceName: Material;
    consumptionFactor: number;
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
    const residences = residenceNames
        .map((name, index) =>
            mapResidence(
                name,
                gameConfig.habitat.requiredResources[index] as IResourceFactory[],
                factories,
                findConfigResidence(index)
            )
        )
        .filter(isDefined);

    const first = residences.shift();

    if (first != null) {
        return [first, ...residences];
    }

    return undefined;
}

function findConfigResidence(level: number): IConfigHabitat | undefined {
    return buildings.filter(isConfigHabitat).find((residence) => residence.productionLogic.habitatLevel === level);
}

function mapResidence(
    name: string | undefined,
    resources: IResourceFactory[],
    factories: FactoryLookup,
    configHabitat?: IConfigHabitat
): IFactory<'citizen'> | undefined {
    if (name == null || configHabitat == null) {
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
        name,
        output: { citizen: configHabitat.productionLogic.maxInhabitants },
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

function isConfigHabitat(value: unknown): value is IConfigHabitat {
    const factory = value as IConfigHabitat;

    return factory.productionLogic?.type === 'habitat' && typeof factory.productionLogic.maxInhabitants === 'number';
}

function isDefined<T>(value: T | null | undefined): value is T {
    return value != null;
}
