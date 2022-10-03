import { FactoryLookup } from '../contracts';
import {
    ElectronicsFactory,
    HoloDisplayFactory,
    IridiumAlloyFactory,
    MicrochipFactory,
    MotorFactory,
    NanotubesFactory,
    NeuralProcessorFactory,
    RadiationCoreFactory,
} from './component-factories';
import {
    AIControlUnitFactory,
    ComputerFactory,
    ConcreteFactory,
    HighTechWorkshop,
    HomeAppliancesFactory,
    HomeRobotFactory,
    IndustrialRobotFactory,
    IridiumPropellantFactory,
    SteelMill,
    VREdutainmentFactory,
} from './finished-goods-factories';
import {
    BasicHabitat,
    DecentHabitat,
    LuxuryResidentialHighrise,
    NiceHabitat,
    ResidentialBuilding,
    ResidentialHighrise,
} from './habitats';
import {
    LargeAluminumMine,
    LargeCopperMine,
    LargeIridiumMine,
    LargeIronMine,
    LargeSandMine,
    LargeSulfurMine,
    LargeUraniumMine,
} from './large-mines';
import {
    AtmosphereProcessor,
    CarbonProcessor,
    FertilizerFactory,
    MealFactory,
    MeatLab,
    OxygenProcessor,
    SimpleFarm,
    VegetableFarm,
} from './life-support';
import { GroundWaterExtractor, MethaneDrill, MethaneFermentationPlant, WaterAirFilter } from './liquids';
import { AluminumMine, CopperMine, IridiumMine, IronMine, SandMine, SulfurMine, UraniumMine } from './mines';
import {
    FastNeutronReactor,
    MethanePowerPlant,
    NuclearPowerPlant,
    SolarPowerPlant,
    WindTurbine,
} from './power-stations';
import {
    BlueSciencePackFactory,
    GreenSciencePackFactory,
    RedSciencePackFactory,
    YellowSciencePackFactory,
} from './research-buildings';

export const factoryLookup: FactoryLookup = {
    Sand: [LargeSandMine, SandMine],
    Sulfur: [LargeSulfurMine, SulfurMine],
    Iron: [LargeIronMine, IronMine],
    Copper: [LargeCopperMine, CopperMine],
    Aluminum: [LargeAluminumMine, AluminumMine],
    Uranium: [LargeUraniumMine, UraniumMine],
    Iridium: [LargeIridiumMine, IridiumMine],

    Electronics: [ElectronicsFactory],
    Microchip: [MicrochipFactory],
    'Neural Processor': [NeuralProcessorFactory],
    Motor: [MotorFactory],
    Nanotubes: [NanotubesFactory],
    'Iridium Alloy': [IridiumAlloyFactory],
    'Holo-Display': [HoloDisplayFactory],
    'Radiation Core': [RadiationCoreFactory],

    Concrete: [ConcreteFactory],
    Steel: [SteelMill],
    'Home Appliances': [HomeAppliancesFactory],
    Computer: [ComputerFactory],
    'Home Robot': [HomeRobotFactory],
    'Industrial Robot': [IndustrialRobotFactory],
    'High Tech Tools': [HighTechWorkshop],
    'VR-Edutainment': [VREdutainmentFactory],
    'Iridium Propellant': [IridiumPropellantFactory],
    'AI Control Unit': [AIControlUnitFactory],

    'Blue Science Pack': [BlueSciencePackFactory],
    'Green Science Pack': [GreenSciencePackFactory],
    'Yellow Science Pack': [YellowSciencePackFactory],
    'Red Science Pack': [RedSciencePackFactory],

    Water: [GroundWaterExtractor, WaterAirFilter],
    Methane: [MethaneDrill, MethaneFermentationPlant],

    Oxygen: [OxygenProcessor, AtmosphereProcessor],
    Carbon: [CarbonProcessor, AtmosphereProcessor],
    'Survival Food': [SimpleFarm],
    Fertilizer: [FertilizerFactory],
    Vegetables: [VegetableFarm],
    Meat: [MeatLab],
    'Good Meal': [MealFactory],
    'Organic Waste': [MeatLab, VegetableFarm],

    Population: [
        LuxuryResidentialHighrise,
        ResidentialHighrise,
        ResidentialBuilding,
        NiceHabitat,
        DecentHabitat,
        BasicHabitat,
    ],

    Power: [FastNeutronReactor, NuclearPowerPlant, MethanePowerPlant, SolarPowerPlant, WindTurbine],
};
