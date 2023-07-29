import resources from '../../assets/config/resources.json';

export type Material = keyof typeof resources;

export const Materials = Object.keys(resources) as Material[];

export interface IFactory<T extends Material = Material> {
    name: string;
    duration: number;
    output: Record<T, number>;
    input?: Partial<Record<Material, number>>;
    workers: number;
    power: number;
    buildCost: Partial<Record<Material, number>>;
}

export type FactoryLookup = {
    readonly [M in Material]?: [IFactory<M>, ...IFactory<M>[]];
};

export type FactoryTotals = Map<IFactory, Partial<Record<Material, number>>>;
