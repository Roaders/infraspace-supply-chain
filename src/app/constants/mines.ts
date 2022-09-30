import { IFactory } from '../contracts';

export const SandMine: IFactory<'Sand'> = {
    name: 'Sand Mine',
    buildCost: { Concrete: 5 },
    duration: 12,
    power: 0.8,
    workers: 3,
    output: { Sand: 1 },
};

export const SulfurMine: IFactory<'Sulfur'> = {
    name: 'Sulfur Mine',
    buildCost: { Concrete: 10 },
    duration: 2.4,
    power: 0.8,
    workers: 3,
    output: { Sulfur: 1 },
};

export const IronMine: IFactory<'Iron'> = {
    name: 'Iron Mine',
    buildCost: { Concrete: 26 },
    duration: 3.2,
    power: 1.8,
    workers: 5,
    output: { Iron: 1 },
};

export const CopperMine: IFactory<'Copper'> = {
    name: 'Copper Mine',
    buildCost: { Concrete: 33 },
    duration: 6.4,
    power: 3,
    workers: 5,
    output: { Copper: 1 },
};

export const AluminumMine: IFactory<'Aluminum'> = {
    name: 'Aluminum Mine',
    buildCost: { Concrete: 46 },
    duration: 10.8,
    power: 4.5,
    workers: 5,
    output: { Aluminum: 1 },
};

export const UraniumMine: IFactory<'Uranium'> = {
    name: 'Uranium Mine',
    buildCost: { Concrete: 60, Steel: 16 },
    duration: 40,
    power: 6,
    workers: 8,
    output: { Uranium: 1 },
};

export const IridiumMine: IFactory<'Iridium'> = {
    name: 'Iridium Mine',
    buildCost: { Concrete: 83, Steel: 26 },
    duration: 10.8,
    power: 7.5,
    workers: 4,
    output: { Iridium: 1 },
};
