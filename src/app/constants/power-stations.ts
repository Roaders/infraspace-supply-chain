import { IFactory } from '../contracts';

export const WindTurbine: IFactory<'Power'> = {
    name: 'Wind Turbine',
    buildCost: { Concrete: 50 },
    duration: 2,
    workers: 0,
    output: { Power: 20 },
};

export const SolarPowerPlant: IFactory<'Power'> = {
    name: 'Solar Power Plant',
    buildCost: { Concrete: 200, Steel: 100 },
    duration: 2,
    workers: 0,
    output: { Power: 50 },
};

export const MethanePowerPlant: IFactory<'Power'> = {
    name: 'Methane Power Plant',
    buildCost: { Concrete: 500, Steel: 200 },
    duration: 2,
    workers: 5,
    input: { Methane: 1 },
    output: { Power: 250 },
};

export const NuclearPowerPlant: IFactory<'Power'> = {
    name: 'Nuclear Power Plant',
    buildCost: { Concrete: 500, Steel: 200 },
    duration: 20,
    workers: 6,
    input: { Uranium: 1 },
    output: { Power: 450 },
};

export const FastNeutronReactor: IFactory<'Power'> = {
    name: 'Fast Neutron Reactor',
    buildCost: { Concrete: 2000, Steel: 800 },
    duration: 10,
    workers: 10,
    input: { Uranium: 1 },
    output: { Power: 1000 },
};
