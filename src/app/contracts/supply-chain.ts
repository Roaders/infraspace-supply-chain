export const Materials = [
    'Sand',
    'Sulphur',
    'Iron',
    'Copper',
    'Aluminum',
    'Iridium',
    'Methane',
    'Iridium Alloy',
    'Concrete',
    'Electronics',
    'Oxygen',
    'Water',
    'Carbon',
    'Steel',
    'Uranium',
    'Adamantine',
    'Iridium Propellant',
    'Microchip',
    'Neural Processor',
    'Nanotubes',
    'Motor',
    'Holo-Display',
    'Radiation Core',
    'Home Appliances',
    'Computer',
    'Home Robot',
    'Industrial Robot',
    'High Tech Tools',
    'AI Control Unit',
    'Holo-Display',
    'VR-Edutainment',
    'Survival Food',
    'Good Meal',
    'Organic Waste',
    'Fertilizer',
    'Meat',
    'Vegetables',
    'Blue Science Pack',
    'Green Science Pack',
    'Yellow Science Pack',
    'Red Science Pack',
] as const;

export type Material = typeof Materials[number];

export interface IFactory<T extends Material = Material> {
    name: string;
    duration: number;
    output: Record<T, number>;
    input?: Partial<Record<Material, number>>;
    power: number;
    workers: number;
    buildCost: Partial<Record<Material, number>>;
}

export type FactoryLookup = {
    readonly [M in Material]: [IFactory<M>, ...IFactory<M>[]];
};