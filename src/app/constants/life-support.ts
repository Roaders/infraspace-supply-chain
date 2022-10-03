import { IFactory } from '../contracts';

export const AtmosphereProcessor: IFactory<'Oxygen' | 'Carbon'> = {
    name: 'Atmosphere Processor',
    buildCost: { Concrete: 8, Steel: 1 },
    duration: 16,
    workers: 3,
    input: { Power: 1 },
    output: { Oxygen: 1, Carbon: 1 },
};

export const OxygenProcessor: IFactory<'Oxygen'> = {
    name: 'Oxygen Processor',
    buildCost: { Concrete: 20, Steel: 2 },
    duration: 8,
    workers: 3,
    input: { Power: 1 },
    output: { Oxygen: 1 },
};

export const CarbonProcessor: IFactory<'Carbon'> = {
    name: 'Carbon Processor',
    buildCost: { Concrete: 20, Steel: 2 },
    duration: 8,
    workers: 3,
    input: { Power: 1 },
    output: { Carbon: 1 },
};

export const SimpleFarm: IFactory<'Survival Food'> = {
    name: 'Simple Farm',
    buildCost: { Concrete: 10 },
    duration: 14,
    workers: 6,
    input: { Power: 2 },
    output: { 'Survival Food': 1 },
};

export const FertilizerFactory: IFactory<'Fertilizer'> = {
    name: 'Fertilizer Factory',
    buildCost: { Concrete: 10, Steel: 16 },
    duration: 10,
    workers: 4,
    input: { Power: 2, Sulfur: 1 },
    output: { Fertilizer: 1 },
};

export const VegetableFarm: IFactory<'Vegetables' | 'Organic Waste'> = {
    name: 'Vegetable Farm',
    buildCost: { Concrete: 22, Steel: 44 },
    duration: 28,
    workers: 4,
    input: { Power: 2, Fertilizer: 2 },
    output: { Vegetables: 4, 'Organic Waste': 1 },
};

export const MeatLab: IFactory<'Meat' | 'Organic Waste'> = {
    name: 'Meat Lab',
    buildCost: { Concrete: 18, Steel: 30 },
    duration: 32,
    workers: 4,
    input: { Power: 1 },
    output: { Meat: 4, 'Organic Waste': 1 },
};

export const MealFactory: IFactory<'Good Meal'> = {
    name: 'Meal Factory',
    buildCost: { Concrete: 20, Steel: 35 },
    duration: 6,
    workers: 4,
    input: { Power: 2, Vegetables: 1, Meat: 1 },
    output: { 'Good Meal': 2 },
};
