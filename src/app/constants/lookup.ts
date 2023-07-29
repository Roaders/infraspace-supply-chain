import { FactoryLookup, IFactory, Material, Materials } from '../contracts';
import { buildings as buildingsImport } from './buildings';

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

const buildings: unknown[] = Object.entries(buildingsImport).map(([name, building]) => ({
    name,
    ...building,
}));

export const factoryLookup: FactoryLookup = buildFactoryLookup();

function buildFactoryLookup(): FactoryLookup {
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
