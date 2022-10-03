import { Material } from '../contracts';

type Icon =
    | 'adamantine'
    | 'aiControlUnit'
    | 'aluminium'
    | 'basicFarm'
    | 'car'
    | 'carbon'
    | 'citizenMovingIn'
    | 'citizenMovingOut'
    | 'computer'
    | 'concrete'
    | 'copperOre'
    | 'culturePoints'
    | 'debug'
    | 'electronics'
    | 'fertilizer'
    | 'ftlPortal'
    | 'goodFood'
    | 'habitant'
    | 'highTechTool'
    | 'holoDisplay'
    | 'homeAppliance'
    | 'homeRobot'
    | 'industrialRobot'
    | 'iridium'
    | 'iridiumAlloy'
    | 'iridiumPropellant'
    | 'ironOre'
    | 'meat'
    | 'methane'
    | 'microchip'
    | 'motor'
    | 'nanoTubes'
    | 'neuralProcessor'
    | 'organicWaste'
    | 'oxygen'
    | 'parkPoints'
    | 'power'
    | 'radiationCore'
    | 'research'
    | 'sand'
    | 'schoolPoints'
    | 'sciencePack1'
    | 'sciencePack1Factory'
    | 'sciencePack2'
    | 'sciencePack2Factory'
    | 'sciencePack3'
    | 'sciencePack3Factory'
    | 'sciencePack4'
    | 'sciencePack4Factory'
    | 'spaceShip'
    | 'spaceshipModule'
    | 'steel'
    | 'storehous'
    | 'sulfur'
    | 'survivalFood'
    | 'uranium'
    | 'vegetables'
    | 'vrEdutainment'
    | 'water';

export function mapMaterialToIcon(material: Material): Icon {
    switch (material) {
        case 'Sand':
            return 'sand';
        case 'Sulfur':
            return 'sulfur';
        case 'Iron':
            return 'ironOre';
        case 'Copper':
            return 'copperOre';
        case 'Aluminum':
            return 'aluminium';
        case 'Iridium':
            return 'iridium';
        case 'Methane':
            return 'methane';
        case 'Iridium Alloy':
            return 'iridiumAlloy';
        case 'Concrete':
            return 'concrete';
        case 'Electronics':
            return 'electronics';
        case 'Oxygen':
            return 'oxygen';
        case 'Water':
            return 'water';
        case 'Carbon':
            return 'carbon';
        case 'Steel':
            return 'steel';
        case 'Uranium':
            return 'uranium';
        case 'Iridium Propellant':
            return 'iridiumPropellant';
        case 'Microchip':
            return 'microchip';
        case 'Neural Processor':
            return 'neuralProcessor';
        case 'Nanotubes':
            return 'nanoTubes';
        case 'Motor':
            return 'motor';
        case 'Holo-Display':
            return 'holoDisplay';
        case 'Radiation Core':
            return 'radiationCore';
        case 'Home Appliances':
            return 'homeAppliance';
        case 'Computer':
            return 'computer';
        case 'Home Robot':
            return 'homeRobot';
        case 'Industrial Robot':
            return 'industrialRobot';
        case 'High Tech Tools':
            return 'highTechTool';
        case 'AI Control Unit':
            return 'aiControlUnit';
        case 'VR-Edutainment':
            return 'vrEdutainment';
        case 'Survival Food':
            return 'survivalFood';
        case 'Good Meal':
            return 'goodFood';
        case 'Organic Waste':
            return 'organicWaste';
        case 'Fertilizer':
            return 'fertilizer';
        case 'Meat':
            return 'meat';
        case 'Vegetables':
            return 'vegetables';
        case 'Blue Science Pack':
            return 'sciencePack1';
        case 'Green Science Pack':
            return 'sciencePack2';
        case 'Yellow Science Pack':
            return 'sciencePack3';
        case 'Red Science Pack':
            return 'sciencePack4';
        case 'Population':
            return 'citizenMovingIn';
        case 'Power':
            return 'power';
    }
}
