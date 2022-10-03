import { IFactory } from '../contracts';

export const SandMine: IFactory<'Sand'> = {
    name: 'Sand Mine',
    buildCost: { Concrete: 5 },
    duration: 12,
    workers: 3,
    input: { Power: 0.8 },
    output: { Sand: 1 },
};

export const SulfurMine: IFactory<'Sulfur'> = {
    name: 'Sulfur Mine',
    buildCost: { Concrete: 10 },
    duration: 2.4,
    workers: 3,
    input: { Power: 0.8 },
    output: { Sulfur: 1 },
};

export const IronMine: IFactory<'Iron'> = {
    name: 'Iron Mine',
    buildCost: { Concrete: 26 },
    duration: 3.2,
    workers: 5,
    input: { Power: 1.8 },
    output: { Iron: 1 },
};

export const CopperMine: IFactory<'Copper'> = {
    name: 'Copper Mine',
    buildCost: { Concrete: 33 },
    duration: 6.4,
    workers: 5,
    input: { Power: 3 },
    output: { Copper: 1 },
};

export const AluminumMine: IFactory<'Aluminum'> = {
    name: 'Aluminum Mine',
    buildCost: { Concrete: 46 },
    duration: 10.8,
    workers: 5,
    input: { Power: 4.5 },
    output: { Aluminum: 1 },
};

export const UraniumMine: IFactory<'Uranium'> = {
    name: 'Uranium Mine',
    buildCost: { Concrete: 60, Steel: 16 },
    duration: 40,
    workers: 8,
    input: { Power: 6 },
    output: { Uranium: 1 },
};

export const IridiumMine: IFactory<'Iridium'> = {
    name: 'Iridium Mine',
    buildCost: { Concrete: 83, Steel: 26 },
    duration: 10.8,
    workers: 4,
    input: { Power: 7.5 },
    output: { Iridium: 1 },
};
