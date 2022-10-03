import { IFactory } from '../contracts';

export const BlueSciencePackFactory: IFactory<'Blue Science Pack'> = {
    name: 'Blue Science Pack Factory',
    output: { 'Blue Science Pack': 1 },
    buildCost: { Concrete: 10 },
    workers: 4,
    input: { Power: 1, Iron: 2, Carbon: 1 },
    duration: 20,
};

export const GreenSciencePackFactory: IFactory<'Green Science Pack'> = {
    name: 'Green Science Pack Factory',
    output: { 'Green Science Pack': 1 },
    buildCost: { Concrete: 20, Steel: 35 },
    workers: 7,
    input: { Power: 3, Electronics: 4, Sulfur: 4, 'Blue Science Pack': 3 },
    duration: 60,
};

export const YellowSciencePackFactory: IFactory<'Yellow Science Pack'> = {
    name: 'Yellow Science Pack Factory',
    output: { 'Yellow Science Pack': 1 },
    buildCost: { Concrete: 30, Steel: 60 },
    workers: 10,
    input: { Power: 8, 'Neural Processor': 4, Motor: 10, 'Green Science Pack': 1, Methane: 5 },
    duration: 120,
};

export const RedSciencePackFactory: IFactory<'Red Science Pack'> = {
    name: 'Red Science Pack Factory',
    output: { 'Red Science Pack': 1 },
    buildCost: { Concrete: 30, Steel: 100 },
    workers: 15,
    input: { Power: 12, 'Yellow Science Pack': 2, 'AI Control Unit': 3, 'Radiation Core': 8 },
    duration: 160,
};
