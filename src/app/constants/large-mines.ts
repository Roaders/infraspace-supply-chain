import { IFactory } from '../contracts';

export const LargeSandMine: IFactory<'Sand'> = {
    name: 'Large Sand Mine',
    buildCost: { Concrete: 48 },
    duration: 6,
    power: 1.6,
    workers: 5,
    output: { Sand: 1 },
};

export const LargeSulphurMine: IFactory<'Sulphur'> = {
    name: 'Large Sulfur Mine',
    buildCost: { Concrete: 48 },
    duration: 1.2,
    power: 1.6,
    workers: 5,
    output: { Sulphur: 1 },
};

export const LargeIronMine: IFactory<'Iron'> = {
    name: 'Large Iron Mine',
    buildCost: { Concrete: 104 },
    duration: 1.6,
    power: 3.6,
    workers: 8,
    output: { Iron: 1 },
};

export const LargeCopperMine: IFactory<'Copper'> = {
    name: 'Large Copper Mine',
    buildCost: { Concrete: 120 },
    duration: 3.2,
    power: 6,
    workers: 8,
    output: { Copper: 1 },
};

export const LargeAluminumMine: IFactory<'Aluminum'> = {
    name: 'Large Aluminum Mine',
    buildCost: { Concrete: 185 },
    duration: 5.4,
    power: 9,
    workers: 8,
    output: { Aluminum: 1 },
};

export const LargeUraniumMine: IFactory<'Uranium'> = {
    name: 'Large Uranium Mine',
    buildCost: { Concrete: 320 },
    duration: 20,
    power: 12,
    workers: 14,
    output: { Uranium: 1 },
};

export const LargeIridiumMine: IFactory<'Iridium'> = {
    name: 'Large Iridium Mine',
    buildCost: { Concrete: 200 },
    power: 15,
    workers: 7,
    output: { Iridium: 1 },
    duration: 5.4,
};

export const ColossalAdamantineDrill: IFactory<'Adamantine'> = {
    name: 'Colossal Adamantine Drill',
    buildCost: { Concrete: 10000, Steel: 3200 },
    power: 60,
    workers: 70,
    input: { 'Red Science Pack': 3, 'Iridium Propellant': 5 },
    output: { Adamantine: 1 },
    duration: 24,
};
