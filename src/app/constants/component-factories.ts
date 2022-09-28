import { IFactory } from '../contracts';

export const ElectronicsFactory: IFactory<'Electronics'> = {
    name: 'Electronics Factory',
    buildCost: { Concrete: 25 },
    power: 1,
    workers: 4,
    input: { Iron: 1, Copper: 1 },
    output: { Electronics: 2 },
    duration: 32,
};

export const MicrochipFactory: IFactory<'Microchip'> = {
    name: 'Microchip Factory',
    buildCost: { Concrete: 45 },
    power: 2,
    workers: 4,
    input: { Sand: 1, Electronics: 1 },
    output: { Microchip: 1 },
    duration: 60,
};

export const NeuralProcessorFactory: IFactory<'Neural Processor'> = {
    name: 'Neural Processor Factory',
    buildCost: { Concrete: 70, Steel: 150 },
    power: 2,
    workers: 4,
    input: { Nanotubes: 3, Sand: 2, Microchip: 2 },
    output: { 'Neural Processor': 1 },
    duration: 90,
};

export const MotorFactory: IFactory<'Motor'> = {
    name: 'Motor Factory',
    buildCost: { Concrete: 20 },
    power: 2,
    workers: 4,
    input: { Steel: 2, Copper: 1 },
    output: { Motor: 1 },
    duration: 24,
};

export const NanotubesFactory: IFactory<'Nanotubes'> = {
    name: 'Nanotubes Factory',
    buildCost: { Concrete: 50 },
    power: 4,
    workers: 4,
    input: { Carbon: 5, Sand: 2, Water: 2 },
    output: { Nanotubes: 2 },
    duration: 50,
};

export const IridiumAlloyFactory: IFactory<'Iridium Alloy'> = {
    name: 'Iridium Alloy Factory',
    buildCost: { Concrete: 20, Steel: 30 },
    power: 3,
    workers: 4,
    input: { Iridium: 2, Nanotubes: 2 },
    output: { 'Iridium Alloy': 1 },
    duration: 26,
};

export const HoloDisplayFactory: IFactory<'Holo-Display'> = {
    name: 'Holo-Display Factory',
    buildCost: { Concrete: 20, Steel: 30 },
    power: 4,
    workers: 4,
    input: { Iridium: 1, Nanotubes: 2, Sand: 2 },
    output: { 'Holo-Display': 1 },
    duration: 26,
};

export const RadiationCoreFactory: IFactory<'Radiation Core'> = {
    name: 'Radiation Core Factory',
    buildCost: { Concrete: 10, Steel: 20 },
    power: 3,
    workers: 4,
    input: { 'Iridium Alloy': 2, Uranium: 2 },
    output: { 'Radiation Core': 1 },
    duration: 20,
};
