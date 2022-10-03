import { IFactory } from '../contracts';

export const BasicHabitat: IFactory<'Population'> = {
    name: 'Basic Habitat',
    buildCost: { Concrete: 10 },
    workers: 0,
    output: { Population: 8 },
    input: { Oxygen: 0.5 },
    duration: 60,
};

export const DecentHabitat: IFactory<'Population'> = {
    name: 'Decent Habitat',
    buildCost: { Concrete: 10 },
    workers: 0,
    output: { Population: 10 },
    input: { Oxygen: 0.6, Water: 0.4, 'Survival Food': 0.6 },
    duration: 60,
};

export const NiceHabitat: IFactory<'Population'> = {
    name: 'Nice Habitat',
    buildCost: { Concrete: 10 },
    workers: 0,
    output: { Population: 12 },
    input: { Oxygen: 0.7, Water: 0.4, 'Survival Food': 0.7, 'Home Appliances': 0.6 },
    duration: 60,
};

export const ResidentialBuilding: IFactory<'Population'> = {
    name: 'Residential Building',
    buildCost: { Concrete: 10 },
    workers: 0,
    output: { Population: 14 },
    input: { Oxygen: 0.8, Water: 0.5, 'Survival Food': 0.8, 'Home Appliances': 0.3, Computer: 0.3 },
    duration: 60,
};

export const ResidentialHighrise: IFactory<'Population'> = {
    name: 'Residential Highrise',
    buildCost: { Concrete: 10 },
    workers: 0,
    output: { Population: 16 },
    input: {
        Oxygen: 1,
        Water: 0.6,
        'Survival Food': 0.2,
        'Good Meal': 0.4,
        'Home Appliances': 0.2,
        Computer: 0.2,
        'Home Robot': 0.3,
    },
    duration: 60,
};

export const LuxuryResidentialHighrise: IFactory<'Population'> = {
    name: 'Luxury Residential Highrise',
    buildCost: { Concrete: 10 },
    workers: 0,
    output: { Population: 18 },
    input: {
        Oxygen: 1.1,
        Water: 0.6,
        'Survival Food': 0.2,
        'Good Meal': 0.4,
        'Home Appliances': 0.2,
        Computer: 0.2,
        'Home Robot': 0.2,
        'VR-Edutainment': 0.2,
    },
    duration: 60,
};
