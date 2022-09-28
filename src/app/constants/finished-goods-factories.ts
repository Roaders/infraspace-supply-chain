import { IFactory } from '../contracts';

export const ConcreteFactory: IFactory<'Concrete'> = {
    name: 'Concrete Factory',
    buildCost: { Concrete: 8 },
    power: 1,
    workers: 3,
    input: { Sulphur: 2, Sand: 1 },
    output: { Concrete: 4 },
    duration: 9.6,
};

export const SteelMill: IFactory<'Steel'> = {
    name: 'Steel Mill',
    buildCost: { Concrete: 15 },
    power: 3,
    workers: 3,
    input: { Iron: 1, Carbon: 1, Water: 1 },
    output: { Steel: 2 },
    duration: 16,
};

export const HomeAppliancesFactory: IFactory<'Home Appliances'> = {
    name: 'Home Appliances Factory',
    buildCost: { Concrete: 50 },
    power: 1,
    workers: 4,
    input: { Iron: 1, Electronics: 2 },
    output: { 'Home Appliances': 2 },
    duration: 36,
};

export const ComputerFactory: IFactory<'Computer'> = {
    name: 'Computer Factory',
    buildCost: { Concrete: 60 },
    power: 3,
    workers: 4,
    input: { Electronics: 2, Microchip: 1, Aluminum: 1 },
    output: { Computer: 4 },
    duration: 80,
};

export const HomeRobotFactory: IFactory<'Home Robot'> = {
    name: 'Home Robot Factory',
    buildCost: { Concrete: 100, Steel: 180 },
    power: 4,
    workers: 4,
    input: { Electronics: 2, Motor: 1, 'Neural Processor': 1, Aluminum: 2 },
    output: { 'Home Robot': 10 },
    duration: 60,
};

export const IndustrialRobotFactory: IFactory<'Industrial Robot'> = {
    name: 'Industrial Robot Factory',
    buildCost: { Concrete: 100, Steel: 180 },
    power: 4,
    workers: 4,
    input: { Electronics: 2, Motor: 1, 'Neural Processor': 1, Aluminum: 2 },
    output: { 'Industrial Robot': 4 },
    duration: 60,
};

export const HighTechWorkshop: IFactory<'High Tech Tools'> = {
    name: 'High Tech Workshop',
    buildCost: { Concrete: 100, Steel: 180 },
    power: 4,
    workers: 4,
    input: { 'Iridium Alloy': 1, 'Neural Processor': 1, Aluminum: 4 },
    output: { 'High Tech Tools': 4 },
    duration: 40,
};

export const VREdutainmentFactory: IFactory<'VR-Edutainment'> = {
    name: 'VR Edutainment Factory',
    buildCost: { Concrete: 120, Steel: 200 },
    power: 4,
    workers: 4,
    input: { Microchip: 1, 'Neural Processor': 1, 'Holo-Display': 1 },
    output: { 'VR-Edutainment': 5 },
    duration: 32,
};

export const IridiumPropellantFactory: IFactory<'Iridium Propellant'> = {
    name: 'Iridium Propellant Factory',
    buildCost: { Concrete: 200, Steel: 300 },
    power: 5,
    workers: 4,
    input: { Iridium: 10, Sulphur: 10 },
    output: { 'Iridium Propellant': 1 },
    duration: 26,
};

export const AIControlUnitFactory: IFactory<'AI Control Unit'> = {
    name: 'AI Control Unit Factory',
    buildCost: { Concrete: 300, Steel: 400 },
    power: 5,
    workers: 4,
    input: { 'Neural Processor': 2, Aluminum: 4 },
    output: { 'AI Control Unit': 1 },
    duration: 26,
};
