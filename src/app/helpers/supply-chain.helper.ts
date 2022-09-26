import { factoryLookup } from '../constants';
import { IFactory, Material } from '../contracts';

export function getFactories<T extends Material>(material: Material): [IFactory<T>, ...IFactory<T>[]] {
    return factoryLookup[material] as [IFactory<T>, ...IFactory<T>[]];
}

export function getRate<T extends Material>(factory: IFactory<T>, material: T, count: number): number {
    return (60 / factory.duration) * factory.output[material] * count;
}
