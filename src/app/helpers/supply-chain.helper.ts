import { factoryLookup } from '../constants';
import { IFactory, Material } from '../contracts';

export function getFactories<T extends Material>(material: Material): [IFactory<T>, ...IFactory<T>[]] {
    return factoryLookup[material] as [IFactory<T>, ...IFactory<T>[]];
}

export function getRate(material: Material, materialCost: number, duration: number, factoryCount = 1): number {
    let factoryRate: number;

    switch (material) {
        case 'Power':
        case 'Population':
            factoryRate = materialCost;
            break;
        default:
            factoryRate = (60 / duration) * materialCost;
    }

    return factoryRate * factoryCount;
}
