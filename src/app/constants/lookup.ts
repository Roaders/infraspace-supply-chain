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
    ColossalAdamantineDrill,
    LargeAluminumMine,
    LargeCopperMine,
    LargeIridiumMine,
    LargeIronMine,
    LargeSandMine,
    LargeSulphurMine,
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
import { AluminumMine, CopperMine, IridiumMine, IronMine, SandMine, SulphurMine, UraniumMine } from './mines';
import {
    BlueSciencePackFactory,
    GreenSciencePackFactory,
    RedSciencePackFactory,
    YellowSciencePackFactory,
} from './research-buildings';

export const factoryLookup: FactoryLookup = {
    Sand: [SandMine, LargeSandMine],
    Sulphur: [SulphurMine, LargeSulphurMine],
    Iron: [IronMine, LargeIronMine],
    Copper: [CopperMine, LargeCopperMine],
    Aluminum: [AluminumMine, LargeAluminumMine],
    Uranium: [UraniumMine, LargeUraniumMine],
    Iridium: [IridiumMine, LargeIridiumMine],
    Adamantine: [ColossalAdamantineDrill],

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

    Water: [WaterAirFilter, GroundWaterExtractor],
    Methane: [MethaneDrill, MethaneFermentationPlant],

    Oxygen: [AtmosphereProcessor, OxygenProcessor],
    Carbon: [AtmosphereProcessor, CarbonProcessor],
    'Survival Food': [SimpleFarm],
    Fertilizer: [FertilizerFactory],
    Vegetables: [VegetableFarm],
    Meat: [MeatLab],
    'Good Meal': [MealFactory],
    'Organic Waste': [MeatLab, VegetableFarm],
};
