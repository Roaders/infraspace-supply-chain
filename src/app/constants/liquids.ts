import { IFactory } from '../contracts';

export const WaterAirFilter: IFactory<'Water'> = {
    name: 'Water Air Filter',
    buildCost: { Concrete: 12 },
    duration: 8,
    power: 1,
    workers: 4,
    output: { Water: 1 },
};

export const GroundWaterExtractor: IFactory<'Water'> = {
    name: 'Ground Water Extractor',
    buildCost: { Concrete: 18, Steel: 40 },
    duration: 2,
    power: 16,
    workers: 4,
    output: { Water: 1 },
};

export const MethaneDrill: IFactory<'Methane'> = {
    name: 'Methane Drill',
    buildCost: { Concrete: 100, Steel: 40 },
    duration: 10,
    power: 1,
    workers: 4,
    output: { Methane: 1 },
};

export const MethaneFermentationPlant: IFactory<'Methane'> = {
    name: 'Methane Fermentation Plant',
    buildCost: { Concrete: 180, Steel: 80 },
    duration: 5,
    power: 1,
    workers: 4,
    input: { 'Organic Waste': 2 },
    output: { Methane: 1 },
};
