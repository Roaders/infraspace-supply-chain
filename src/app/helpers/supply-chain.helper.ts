import { factoryLookup } from '../constants';
import { IFactory, Material } from '../contracts';

export function getFactories<T extends Material>(material: Material): [IFactory<T>, ...IFactory<T>[]] {
    return factoryLookup[material] as [IFactory<T>, ...IFactory<T>[]];
}

export function getRate(materialCost: number, duration: number, factoryCount = 1): number {
    return (60 / duration) * materialCost * factoryCount;
}
