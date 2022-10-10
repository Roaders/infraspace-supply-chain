import { IFactory } from '../contracts';

export const LargeSandMine: IFactory<'Sand'> = {
    name: 'Large Sand Mine',
    buildCost: { Concrete: 48 },
    duration: 6,
    workers: 5,
    input: { Power: 1.6 },
    output: { Sand: 1 },
};

export const LargeSulfurMine: IFactory<'Sulfur'> = {
    name: 'Large Sulfur Mine',
    buildCost: { Concrete: 48 },
    duration: 1.2,
    workers: 5,
    input: { Power: 1.6 },
    output: { Sulfur: 1 },
};

export const LargeIronMine: IFactory<'Iron'> = {
    name: 'Large Iron Mine',
    buildCost: { Concrete: 104 },
    duration: 1.6,
    workers: 8,
    input: { Power: 3.6 },
    output: { Iron: 1 },
};

export const LargeCopperMine: IFactory<'Copper'> = {
    name: 'Large Copper Mine',
    buildCost: { Concrete: 120 },
    duration: 3.2,
    workers: 8,
    input: { Power: 6 },
    output: { Copper: 1 },
};

export const LargeAluminumMine: IFactory<'Aluminum'> = {
    name: 'Large Aluminum Mine',
    buildCost: { Concrete: 185 },
    duration: 5.4,
    workers: 8,
    input: { Power: 9 },
    output: { Aluminum: 1 },
};

export const LargeUraniumMine: IFactory<'Uranium'> = {
    name: 'Large Uranium Mine',
    buildCost: { Concrete: 320, Steel: 64 },
    duration: 20,
    workers: 14,
    input: { Power: 12 },
    output: { Uranium: 1 },
};

export const LargeIridiumMine: IFactory<'Iridium'> = {
    name: 'Large Iridium Mine',
    buildCost: { Concrete: 200, Steel: 105 },
    workers: 7,
    input: { Power: 15 },
    output: { Iridium: 1 },
    duration: 5.4,
};

export const ColossalAdamantineDrill: IFactory<'Adamantine'> = {
    name: 'Colossal Adamantine Drill',
    buildCost: { Concrete: 10000, Steel: 3200 },
    workers: 70,
    input: { Power: 60, 'Red Science Pack': 2, 'Iridium Propellant': 5, Methane: 10 },
    output: { Adamantine: 1 },
    duration: 24,
};
