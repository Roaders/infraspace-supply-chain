export const Materials = [
    'power',
    'terraform',
    'sand',
    'sulfur',
    'concrete',
    'ironOre',
    'aluminium',
    'uranium',
    'iridium',
    'adamantine',
    'carbon',
    'nanotubes',
    'steel',
    'copperOre',
    'motor',
    'electronics',
    'homeAppliance',
    'microchip',
    'neuralProcessor',
    'computer',
    'homeRobot',
    'industrialRobot',
    'highTechTool',
    'vrEdutainment',
    'reinforcedIridium',
    'holoDisplay',
    'superconductor',
    'aiControlUnit',
    'radiationCore',
    'sciencePack1',
    'sciencePack2',
    'sciencePack3',
    'sciencePack4',
    'spaceshipModule',
    'oxygen',
    'water',
    'methane',
    'fertilizer',
    'vegetables',
    'meat',
    'organicWaste',
    'goodFood',
    'survivalFood',
    'filteringMesh',
    'advancedFilteringMesh',
    'superconductingCoil',
    'parkPoints',
    'culturePoints',
    'schoolPoints',
    'car',
    'citizenMovingIn',
    'citizenMovingOut',
    'crudeOil',
    'stemCell',
    'copperBar',
    'chemicals',
    'industrialChemicals',
    'enrichedUranium',
    'plastic',
    'sensor',
    'heatExchanger',
    'distilledWater',
] as const;

export type Material = typeof Materials[number];

export interface IFactory<T extends Material = Material> {
    name: string;
    duration: number;
    output: Record<T, number>;
    input?: Partial<Record<Material, number>>;
    workers: number;
    power: number;
    buildCost: Partial<Record<Material, number>>;
}

export type FactoryLookup = {
    readonly [M in Material]?: [IFactory<M>, ...IFactory<M>[]];
};

export type FactoryTotals = Map<IFactory, Partial<Record<Material, number>>>;
