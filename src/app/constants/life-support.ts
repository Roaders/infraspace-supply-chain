import { IFactory } from '../contracts';

export const AtmosphereProcessor: IFactory<'Oxygen' | 'Carbon'> = {
    name: 'Atmosphere Processor',
    buildCost: { Concrete: 8, Steel: 1 },
    duration: 16,
    power: 1,
    workers: 3,
    output: { Oxygen: 1, Carbon: 1 },
};

export const OxygenProcessor: IFactory<'Oxygen'> = {
    name: 'Oxygen Processor',
    buildCost: { Concrete: 20, Steel: 2 },
    duration: 8,
    power: 1,
    workers: 3,
    output: { Oxygen: 1 },
};

export const CarbonProcessor: IFactory<'Carbon'> = {
    name: 'Carbon Processor',
    buildCost: { Concrete: 20, Steel: 2 },
    duration: 8,
    power: 1,
    workers: 3,
    output: { Carbon: 1 },
};

export const SimpleFarm: IFactory<'Survival Food'> = {
    name: 'Simple Farm',
    buildCost: { Concrete: 10 },
    duration: 14,
    power: 2,
    workers: 6,
    output: { 'Survival Food': 1 },
};

export const FertilizerFactory: IFactory<'Fertilizer'> = {
    name: 'Fertilizer Factory',
    buildCost: { Concrete: 10, Steel: 16 },
    duration: 10,
    power: 2,
    workers: 4,
    input: { Sulphur: 1 },
    output: { Fertilizer: 1 },
};

export const VegetableFarm: IFactory<'Vegetables' | 'Organic Waste'> = {
    name: 'Vegetable Farm',
    buildCost: { Concrete: 22, Steel: 44 },
    duration: 28,
    power: 2,
    workers: 4,
    input: { Fertilizer: 2 },
    output: { Vegetables: 4, 'Organic Waste': 1 },
};

export const MeatLab: IFactory<'Meat' | 'Organic Waste'> = {
    name: 'Meat Lab',
    buildCost: { Concrete: 18, Steel: 30 },
    duration: 32,
    power: 1,
    workers: 4,
    output: { Meat: 4, 'Organic Waste': 1 },
};

export const MealFactory: IFactory<'Good Meal'> = {
    name: 'Meal Factory',
    buildCost: { Concrete: 20, Steel: 35 },
    duration: 6,
    power: 2,
    workers: 4,
    output: { 'Good Meal': 2 },
};