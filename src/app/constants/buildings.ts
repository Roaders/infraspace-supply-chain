// THis is just copied from buildings.json in assets but that is not valid json so can't be used directly

export const buildings = {
    sandMine: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 500,
            },
        ],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.75,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 3.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'sand',
                        amount: 1,
                    },
                ],
                timeSteps: 25000,
                powerNeeded: 1,
                maxWorkers: 2,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
    },
    largeSandMine: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2500,
            },
        ],
        requiredTech: ['largeMines'],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4.5,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'sand',
                        amount: 2,
                    },
                ],
                timeSteps: 25000,
                powerNeeded: 4,
                maxWorkers: 2,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.25,
        },
    },
    sulfurMine: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 500,
            },
        ],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.75,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 3.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'sulfur',
                        amount: 1,
                    },
                ],
                timeSteps: 25000,
                powerNeeded: 1,
                maxWorkers: 2,
                yieldResourceName: 'SulfurCollider',
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
    },
    largeSulfurMine: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2500,
            },
        ],
        requiredTech: ['largeMines'],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4.5,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'sulfur',
                        amount: 2,
                    },
                ],
                timeSteps: 25000,
                powerNeeded: 4,
                maxWorkers: 2,
                yieldResourceName: 'SulfurCollider',
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.25,
        },
    },
    ironMine: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 1000,
            },
        ],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.75,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 3.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'ironOre',
                        amount: 1,
                    },
                ],
                timeSteps: 25000,
                powerNeeded: 2,
                maxWorkers: 2,
                yieldResourceName: 'IronCollider',
                hasResourceRotation: true,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
    },
    largeIronMine: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
        ],
        requiredTech: ['largeMines'],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4.5,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'ironOre',
                        amount: 2,
                    },
                ],
                timeSteps: 25000,
                powerNeeded: 5,
                maxWorkers: 3,
                yieldResourceName: 'IronCollider',
                hasResourceRotation: true,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.25,
        },
    },
    copperMine: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2000,
            },
        ],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        requiredTech: ['electronics'],
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.75,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 3.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'copperOre',
                        amount: 1,
                    },
                ],
                timeSteps: 25000,
                powerNeeded: 2,
                maxWorkers: 2,
                yieldResourceName: 'CopperCollider',
                hasResourceRotation: true,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
    },
    largeCopperMine: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 7500,
            },
        ],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        requiredTech: ['electronics', 'largeMines'],
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4.5,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'copperOre',
                        amount: 2,
                    },
                ],
                timeSteps: 25000,
                powerNeeded: 6,
                maxWorkers: 3,
                yieldResourceName: 'CopperCollider',
                hasResourceRotation: true,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.25,
        },
    },
    aluminiumMine: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
        ],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        requiredTech: ['aluminiumMining'],
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.75,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 3.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'aluminium',
                        amount: 1,
                    },
                ],
                timeSteps: 50000,
                powerNeeded: 2,
                maxWorkers: 4,
                yieldResourceName: 'AluminiumCollider',
                hasResourceRotation: true,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
    },
    largeAluminiumMine: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 12500,
            },
        ],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        requiredTech: ['aluminiumMining', 'largeMines'],
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4.5,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'aluminium',
                        amount: 2,
                    },
                ],
                timeSteps: 50000,
                powerNeeded: 8,
                maxWorkers: 6,
                yieldResourceName: 'AluminiumCollider',
                hasResourceRotation: true,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.25,
        },
    },
    uraniumMine: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
            {
                resourceName: 'steel',
                amount: 2500,
            },
        ],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        requiredTech: ['uraniumMining'],
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.75,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 3.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'uranium',
                        amount: 1,
                    },
                ],
                timeSteps: 100000,
                powerNeeded: 5,
                maxWorkers: 5,
                yieldResourceName: 'UraniumCollider',
                hasResourceRotation: true,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
    },
    largeUraniumMine: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 12500,
            },
            {
                resourceName: 'steel',
                amount: 5000,
            },
        ],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        requiredTech: ['uraniumMining', 'largeMines'],
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4.5,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'uranium',
                        amount: 2,
                    },
                ],
                timeSteps: 100000,
                powerNeeded: 12,
                maxWorkers: 8,
                yieldResourceName: 'UraniumCollider',
                hasResourceRotation: true,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.25,
        },
    },
    iridiumMine: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
            {
                resourceName: 'steel',
                amount: 5000,
            },
        ],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        requiredTech: ['iridiumMining'],
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.75,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 3.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'iridium',
                        amount: 1,
                    },
                ],
                timeSteps: 50000,
                powerNeeded: 4,
                maxWorkers: 4,
                yieldResourceName: 'IridiumCollider',
                hasResourceRotation: true,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
    },
    largeIridiumMine: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 12500,
            },
            {
                resourceName: 'steel',
                amount: 12500,
            },
        ],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        requiredTech: ['iridiumMining', 'largeMines'],
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4.5,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'iridium',
                        amount: 2,
                    },
                ],
                timeSteps: 50000,
                powerNeeded: 12,
                maxWorkers: 8,
                yieldResourceName: 'IridiumCollider',
                hasResourceRotation: true,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.25,
        },
    },
    concreteFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 1500,
            },
        ],
        buildingSound: 'build production',
        workingSound: 'buildings_Concrete_Factory',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 2.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'sulfur',
                        amount: 1,
                    },
                    {
                        resourceName: 'sand',
                        amount: 1,
                    },
                ],
                producables: [
                    {
                        resourceName: 'concrete',
                        amount: 5,
                    },
                ],
                timeSteps: 50000,
                powerNeeded: 2,
                maxWorkers: 4,
            },
        },
        sideRoadOffset: {
            x: 0.21,
            y: 0,
            z: 0.5,
        },
    },
    steelMill: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2000,
            },
        ],
        requiredTech: ['steelMaking'],
        buildingSound: 'build production',
        workingSound: 'buildings_Concrete_Factory',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 2.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'ironOre',
                        amount: 1,
                    },
                    {
                        resourceName: 'carbon',
                        amount: 1,
                    },
                    {
                        resourceName: 'water',
                        amount: 1,
                    },
                ],
                producables: [
                    {
                        resourceName: 'steel',
                        amount: 5,
                    },
                ],
                timeSteps: 50000,
                powerNeeded: 2,
                maxWorkers: 4,
            },
        },
        sideRoadOffset: {
            x: 0.06,
            y: 0,
            z: 0.5,
        },
        pipeResourceNames: ['water'],
    },
    motorFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
            {
                resourceName: 'steel',
                amount: 3000,
            },
        ],
        requiredTech: ['motors'],
        buildingSound: 'build refinement',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.75,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'copperBar',
                        amount: 2,
                    },
                    {
                        resourceName: 'steel',
                        amount: 5,
                    },
                    {
                        resourceName: 'crudeOil',
                        amount: 4,
                    },
                ],
                producables: [
                    {
                        resourceName: 'motor',
                        amount: 4,
                    },
                ],
                timeSteps: 200000,
                powerNeeded: 10,
                maxWorkers: 4,
            },
        },
        sideRoadOffset: {
            x: 0.02,
            y: 0,
            z: 0.5,
        },
        pipeResourceNames: ['crudeOil'],
    },
    electronicsFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2000,
            },
        ],
        requiredTech: ['electronics'],
        buildingSound: 'build refinement',
        workingSound: 'buildings_Electronics_Factory',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.35,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 3,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'ironOre',
                        amount: 2,
                    },
                    {
                        resourceName: 'copperOre',
                        amount: 2,
                    },
                ],
                producables: [
                    {
                        resourceName: 'electronics',
                        amount: 2,
                    },
                ],
                timeSteps: 75000,
                powerNeeded: 4,
                maxWorkers: 2,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
    },
    homeAppliancesFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 4000,
            },
            {
                resourceName: 'steel',
                amount: 1000,
            },
        ],
        requiredTech: ['electronics'],
        buildingSound: 'build refinement',
        workingSound: 'buildings_Electronics_Factory',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 2.25,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'electronics',
                        amount: 2,
                    },
                    {
                        resourceName: 'plastic',
                        amount: 1,
                    },
                ],
                producables: [
                    {
                        resourceName: 'homeAppliance',
                        amount: 3,
                    },
                ],
                timeSteps: 150000,
                powerNeeded: 2,
                maxWorkers: 4,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1,
        },
    },
    microchipFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
            {
                resourceName: 'steel',
                amount: 2000,
            },
        ],
        requiredTech: ['computers'],
        buildingSound: 'build refinement',
        workingSound: 'buildings_Electronics_Factory',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.5,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 3.5,
                    z: 2,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'sand',
                        amount: 3,
                    },
                    {
                        resourceName: 'electronics',
                        amount: 2,
                    },
                ],
                producables: [
                    {
                        resourceName: 'microchip',
                        amount: 3,
                    },
                ],
                timeSteps: 150000,
                powerNeeded: 5,
                maxWorkers: 6,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.25,
        },
    },
    computerFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
            {
                resourceName: 'steel',
                amount: 10000,
            },
        ],
        requiredTech: ['computers'],
        buildingSound: 'build production',
        workingSound: 'buildings_Electronics_Factory',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.25,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'plastic',
                        amount: 4,
                    },
                    {
                        resourceName: 'microchip',
                        amount: 4,
                    },
                    {
                        resourceName: 'aluminium',
                        amount: 3,
                    },
                ],
                producables: [
                    {
                        resourceName: 'computer',
                        amount: 8,
                    },
                ],
                timeSteps: 300000,
                powerNeeded: 10,
                maxWorkers: 12,
            },
        },
        sideRoadOffset: {
            x: 1,
            y: 0,
            z: 1.25,
        },
    },
    nanotubesFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
            {
                resourceName: 'steel',
                amount: 5000,
            },
        ],
        requiredTech: ['nanotubes'],
        buildingSound: 'build refinement',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2.25,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 7,
                    z: 4,
                },
            },
        ],
        modelVariations: 2,
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'industrialChemicals',
                        amount: 2,
                    },
                    {
                        resourceName: 'carbon',
                        amount: 6,
                    },
                ],
                producables: [
                    {
                        resourceName: 'nanotubes',
                        amount: 4,
                    },
                ],
                timeSteps: 200000,
                powerNeeded: 10,
                maxWorkers: 6,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
    },
    neuralProcessorFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 7500,
            },
            {
                resourceName: 'steel',
                amount: 10000,
            },
        ],
        requiredTech: ['neuralProcessors'],
        buildingSound: 'build refinement',
        workingSound: 'buildings_Electronics_Factory',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2.25,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 7,
                    z: 2,
                },
            },
        ],
        modelVariations: 2,
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'nanotubes',
                        amount: 6,
                    },
                    {
                        resourceName: 'microchip',
                        amount: 8,
                    },
                ],
                producables: [
                    {
                        resourceName: 'neuralProcessor',
                        amount: 3,
                    },
                ],
                timeSteps: 300000,
                powerNeeded: 10,
                maxWorkers: 10,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.25,
        },
    },
    homeRobotFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 10000,
            },
            {
                resourceName: 'steel',
                amount: 10000,
            },
        ],
        requiredTech: ['homeRobots'],
        buildingSound: 'build production',
        workingSound: 'buildings_Electronics_Factory',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.25,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 2.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'sensor',
                        amount: 4,
                    },
                    {
                        resourceName: 'motor',
                        amount: 4,
                    },
                    {
                        resourceName: 'neuralProcessor',
                        amount: 1,
                    },
                ],
                producables: [
                    {
                        resourceName: 'homeRobot',
                        amount: 6,
                    },
                ],
                timeSteps: 300000,
                powerNeeded: 10,
                maxWorkers: 8,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
    },
    industrialRobotFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 10000,
            },
            {
                resourceName: 'steel',
                amount: 10000,
            },
        ],
        requiredTech: ['industrialRobots'],
        buildingSound: 'build production',
        workingSound: 'buildings_Electronics_Factory',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.5,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 3.25,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'sensor',
                        amount: 4,
                    },
                    {
                        resourceName: 'motor',
                        amount: 4,
                    },
                    {
                        resourceName: 'neuralProcessor',
                        amount: 1,
                    },
                ],
                producables: [
                    {
                        resourceName: 'industrialRobot',
                        amount: 6,
                    },
                ],
                timeSteps: 300000,
                powerNeeded: 10,
                maxWorkers: 8,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.25,
        },
    },
    highTechWorkshop: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 10000,
            },
            {
                resourceName: 'steel',
                amount: 20000,
            },
        ],
        requiredTech: ['highTechWorkshop'],
        buildingSound: 'build production',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 3,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 8.5,
                    z: 4,
                },
            },
        ],
        modelVariations: 2,
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'reinforcedIridium',
                        amount: 4,
                    },
                    {
                        resourceName: 'nanotubes',
                        amount: 2,
                    },
                    {
                        resourceName: 'sensor',
                        amount: 4,
                    },
                    {
                        resourceName: 'methane',
                        amount: 2,
                    },
                ],
                producables: [
                    {
                        resourceName: 'highTechTool',
                        amount: 6,
                    },
                ],
                timeSteps: 300000,
                powerNeeded: 10,
                maxWorkers: 6,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
        pipeResourceNames: ['methane'],
    },
    vrEdutainmentFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 25000,
            },
            {
                resourceName: 'steel',
                amount: 20000,
            },
        ],
        requiredTech: ['holoDisplays'],
        buildingSound: 'build production',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.5,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 6,
                    z: 2,
                },
            },
        ],
        modelVariations: 2,
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'neuralProcessor',
                        amount: 4,
                    },
                    {
                        resourceName: 'holoDisplay',
                        amount: 8,
                    },
                ],
                producables: [
                    {
                        resourceName: 'vrEdutainment',
                        amount: 6,
                    },
                ],
                timeSteps: 300000,
                powerNeeded: 25,
                maxWorkers: 15,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.25,
        },
    },

    reinforcedIridiumFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
            {
                resourceName: 'steel',
                amount: 2500,
            },
        ],
        requiredTech: ['iridiumMining'],
        buildingSound: 'build refinement',
        workingSound: 'buildings_Concrete_Factory',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.5,
                    z: 0,
                },
                size: {
                    x: 8,
                    y: 3.75,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'iridium',
                        amount: 2,
                    },
                    {
                        resourceName: 'industrialChemicals',
                        amount: 1,
                    },
                    {
                        resourceName: 'crudeOil',
                        amount: 4,
                    },
                ],
                producables: [
                    {
                        resourceName: 'reinforcedIridium',
                        amount: 2,
                    },
                ],
                timeSteps: 100000,
                powerNeeded: 10,
                maxWorkers: 6,
            },
        },
        sideRoadOffset: {
            x: -0.165,
            y: 0,
            z: 1.25,
        },
        pipeResourceNames: ['crudeOil'],
    },
    holoDisplayFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
            {
                resourceName: 'steel',
                amount: 7500,
            },
        ],
        requiredTech: ['holoDisplays'],
        buildingSound: 'build refinement',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 6.5,
                    z: 4,
                },
            },
        ],
        modelVariations: 2,
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'nanotubes',
                        amount: 2,
                    },
                    {
                        resourceName: 'reinforcedIridium',
                        amount: 2,
                    },
                    {
                        resourceName: 'sensor',
                        amount: 4,
                    },
                ],
                producables: [
                    {
                        resourceName: 'holoDisplay',
                        amount: 2,
                    },
                ],
                timeSteps: 150000,
                powerNeeded: 8,
                maxWorkers: 15,
            },
        },
        sideRoadOffset: {
            x: 0.55,
            y: 0,
            z: 1.25,
        },
    },
    superconductorFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 20000,
            },
            {
                resourceName: 'steel',
                amount: 25000,
            },
        ],
        requiredTech: ['superconductor'],
        buildingSound: 'build production',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 5.25,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 13,
                    z: 6,
                },
            },
        ],
        modelVariations: 2,
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'iridium',
                        amount: 6,
                    },
                    {
                        resourceName: 'sulfur',
                        amount: 10,
                    },
                    {
                        resourceName: 'heatExchanger',
                        amount: 8,
                    },
                ],
                producables: [
                    {
                        resourceName: 'superconductor',
                        amount: 2,
                    },
                ],
                timeSteps: 300000,
                powerNeeded: 20,
                maxWorkers: 10,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.25,
        },
    },
    aiControlUnitFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 25000,
            },
            {
                resourceName: 'steel',
                amount: 20000,
            },
        ],
        requiredTech: ['aiControlUnits'],
        buildingSound: 'build production',
        workingSound: 'buildings_Electronics_Factory',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 5.5,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 13.5,
                    z: 6,
                },
            },
        ],
        modelVariations: 2,
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'sensor',
                        amount: 10,
                    },
                    {
                        resourceName: 'neuralProcessor',
                        amount: 6,
                    },
                    {
                        resourceName: 'methane',
                        amount: 8,
                    },
                ],
                producables: [
                    {
                        resourceName: 'aiControlUnit',
                        amount: 4,
                    },
                ],
                timeSteps: 600000,
                powerNeeded: 20,
                maxWorkers: 10,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.25,
        },
        pipeResourceNames: ['methane'],
    },
    radiationCoreFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 20000,
            },
            {
                resourceName: 'steel',
                amount: 40000,
            },
        ],
        requiredTech: ['uraniumMining'],
        buildingSound: 'build refinement',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 4,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 10.5,
                    z: 6,
                },
            },
        ],
        modelVariations: 2,
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'reinforcedIridium',
                        amount: 8,
                    },
                    {
                        resourceName: 'enrichedUranium',
                        amount: 10,
                    },
                ],
                producables: [
                    {
                        resourceName: 'radiationCore',
                        amount: 8,
                    },
                ],
                timeSteps: 600000,
                powerNeeded: 50,
                maxWorkers: 12,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.25,
        },
    },
    sciencePack1Factory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2000,
            },
            {
                resourceName: 'steel',
                amount: 1500,
            },
        ],
        buildingSound: 'build science',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 2,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'crudeOil',
                        amount: 2,
                    },
                    {
                        resourceName: 'carbon',
                        amount: 1,
                    },
                ],
                producables: [
                    {
                        resourceName: 'sciencePack1',
                        amount: 1,
                    },
                ],
                timeSteps: 75000,
                powerNeeded: 5,
                maxWorkers: 4,
            },
        },
        sideRoadOffset: {
            x: 0.29,
            y: 0,
            z: 0.5,
        },
        pipeResourceNames: ['crudeOil'],
    },
    sciencePack2Factory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 3000,
            },
            {
                resourceName: 'steel',
                amount: 4000,
            },
        ],
        requiredTech: ['science2'],
        buildingSound: 'build science',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.25,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 2.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'sand',
                        amount: 2,
                    },
                    {
                        resourceName: 'chemicals',
                        amount: 4,
                    },
                    {
                        resourceName: 'aluminium',
                        amount: 1,
                    },
                    {
                        resourceName: 'sciencePack1',
                        amount: 2,
                    },
                ],
                producables: [
                    {
                        resourceName: 'sciencePack2',
                        amount: 1,
                    },
                ],
                timeSteps: 150000,
                powerNeeded: 10,
                maxWorkers: 6,
            },
        },
        sideRoadOffset: {
            x: 0.193,
            y: 0,
            z: 0.5,
        },
    },
    sciencePack3Factory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
            {
                resourceName: 'steel',
                amount: 10000,
            },
        ],
        requiredTech: ['science3'],
        buildingSound: 'build science',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.5,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 3,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'motor',
                        amount: 4,
                    },
                    {
                        resourceName: 'organicWaste',
                        amount: 2,
                    },
                    {
                        resourceName: 'methane',
                        amount: 4,
                    },
                    {
                        resourceName: 'sciencePack2',
                        amount: 3,
                    },
                ],
                producables: [
                    {
                        resourceName: 'sciencePack3',
                        amount: 1,
                    },
                ],
                timeSteps: 300000,
                powerNeeded: 10,
                maxWorkers: 15,
            },
        },
        sideRoadOffset: {
            x: -0.35,
            y: 0,
            z: 0.5,
        },
        pipeResourceNames: ['methane'],
    },
    sciencePack4Factory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 10000,
            },
            {
                resourceName: 'steel',
                amount: 15000,
            },
        ],
        requiredTech: ['science4'],
        buildingSound: 'build science',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.75,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 3.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'aiControlUnit',
                        amount: 4,
                    },
                    {
                        resourceName: 'radiationCore',
                        amount: 8,
                    },
                    {
                        resourceName: 'sciencePack3',
                        amount: 4,
                    },
                ],
                producables: [
                    {
                        resourceName: 'sciencePack4',
                        amount: 1,
                    },
                ],
                timeSteps: 600000,
                powerNeeded: 35,
                maxWorkers: 20,
            },
        },
        sideRoadOffset: {
            x: 0.63,
            y: 0,
            z: 0.5,
        },
    },
    researchLab: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2500,
            },
        ],
        buildingSound: 'build science',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.25,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 3,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'research',
            powerNeeded: 1,
        },
        sideRoadOffset: {
            x: -0.33,
            y: 0,
            z: 0.5,
        },
    },
    storehouse: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
        ],
        buildingSound: 'build misc',
        hasRoadConnection: false,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.5,
                    z: 0,
                },
                size: {
                    x: 8,
                    y: 4,
                    z: 10,
                },
            },
        ],
        productionLogic: {
            type: 'storehouse',
            consumables: ['concrete', 'steel', 'car', 'adamantine'],
            powerNeeded: 5,
        },
        //"sideRoadOffset": {"x": 0, "y": 0, "z":  3.5},
        netEdges: [
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_concrete_oneWay_threeLane',
                startPos: {
                    x: -1,
                    y: 0.2,
                    z: 6,
                },
                endPos: {
                    x: -1,
                    y: 0.2,
                    z: 3,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_concrete_oneWay_threeLane',
                startPos: {
                    x: 1,
                    y: 0.2,
                    z: 6,
                },
                endPos: {
                    x: 1,
                    y: 0.2,
                    z: 3,
                },
                trafficType: 'incoming',
            },
        ],
    },
    storehouseSmall: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2000,
            },
        ],
        buildingSound: 'build misc',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.5,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 2,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'storehouse',
            consumables: ['concrete', 'steel', 'car', 'adamantine'],
            powerNeeded: 1,
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.5,
        },
    },
    gondolaStation: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 50000,
            },
            {
                resourceName: 'steel',
                amount: 50000,
            },
        ],
        requiredTech: ['cargoGondolas'],
        hasRoadConnection: false,
        buildingSystem: 'pair',
        buildingSound: 'build misc',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 3,
                    z: 0,
                },
                size: {
                    x: 12,
                    y: 6,
                    z: 14,
                },
            },
            //{"type": "box", "center": {"x": 0, "y": 4, "z":  -14}, "size": {"x": 12, "y": 4, "z":  2}}
        ],
        isGondolaStation: true,
        distanceCostMultiplier: 20,
        placesBuildingConnector: 'gondolaLine',
        inBetweenObject: 'gondolaPole',
        stationModule: 'gondola',
        netEdges: [
            {
                type: 'road', // incoming in the middle bottom left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -1,
                    y: 0.2,
                    z: 8,
                },
                endPos: {
                    x: -1,
                    y: 0.2,
                    z: 6,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle bottom left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 1,
                    y: 0.2,
                    z: 6,
                },
                endPos: {
                    x: 1,
                    y: 0.2,
                    z: 8,
                },
                trafficType: 'outgoing',
            },
        ],
    },
    gondolaPole: {
        doesAlwaysWork: true,
        interactable: false,
        doesAffectTerrain: false,
        hasRoadConnection: false,
        buildingSound: 'build misc',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: -14,
                    z: 0,
                },
                size: {
                    x: 8,
                    y: 42,
                    z: 2,
                },
            },
        ],
        buildingTiltRatio: 1,
    },
    gondolaStationPole: {
        doesAlwaysWork: true,
        interactable: false,
        doesAffectTerrain: false,
        hasRoadConnection: false,
        buildingSound: 'build misc',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: -0.85,
                },
                size: {
                    x: 8,
                    y: 10,
                    z: 2,
                },
            },
        ],
        buildingTiltRatio: 1,
    },
    airProcessor: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 1000,
            },
            {
                resourceName: 'steel',
                amount: 500,
            },
        ],
        buildingSound: 'build life support',
        workingSound: 'buildings_Atmosphere_Processor',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'oxygen',
                        amount: 1,
                    },
                    {
                        resourceName: 'carbon',
                        amount: 1,
                    },
                ],
                timeSteps: 50000,
                powerNeeded: 4,
                maxWorkers: 4,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.75,
        },
        pipeResourceNames: ['oxygen'],
    },
    oxygenProcessor: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2500,
            },
            {
                resourceName: 'steel',
                amount: 1500,
            },
        ],
        requiredTech: ['particleFiltering'],
        buildingSound: 'build life support',
        workingSound: 'buildings_Atmosphere_Processor',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'oxygen',
                        amount: 2,
                    },
                ],
                timeSteps: 50000,
                powerNeeded: 10,
                maxWorkers: 6,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.75,
        },
        pipeResourceNames: ['oxygen'],
    },
    carbonProcessor: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2500,
            },
            {
                resourceName: 'steel',
                amount: 1500,
            },
        ],
        requiredTech: ['particleFiltering'],
        buildingSound: 'build life support',
        workingSound: 'buildings_Atmosphere_Processor',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'carbon',
                        amount: 2,
                    },
                ],
                timeSteps: 50000,
                powerNeeded: 10,
                maxWorkers: 6,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.75,
        },
    },
    basicFarm: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2000,
            },
        ],
        requiredTech: ['farming'],
        buildingSound: 'build life support',
        workingSound: 'buildings_Basic_Farm',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 2,
                    y: 2,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'water',
                        amount: 1,
                    },
                ],
                producables: [
                    {
                        resourceName: 'survivalFood',
                        amount: 1,
                    },
                ],
                timeSteps: 50000,
                powerNeeded: 4,
                maxWorkers: 2,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.5,
        },
        pipeResourceNames: ['water'],
    },
    fertilizerFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2500,
            },
            {
                resourceName: 'steel',
                amount: 2500,
            },
        ],
        requiredTech: ['foodProcessing'],
        buildingSound: 'build life support',
        workingSound: 'buildings_Basic_Farm',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 2,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'sulfur',
                        amount: 2,
                    },
                    {
                        resourceName: 'chemicals',
                        amount: 2,
                    },
                ],
                producables: [
                    {
                        resourceName: 'fertilizer',
                        amount: 2,
                    },
                ],
                timeSteps: 100000,
                powerNeeded: 4,
                maxWorkers: 4,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1,
        },
    },
    vegetableFarm: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 4000,
            },
            {
                resourceName: 'steel',
                amount: 2500,
            },
        ],
        requiredTech: ['foodProcessing'],
        buildingSound: 'build life support',
        workingSound: 'buildings_Basic_Farm',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 8,
                    y: 2,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'fertilizer',
                        amount: 2,
                    },
                    {
                        resourceName: 'water',
                        amount: 3,
                    },
                    {
                        resourceName: 'oxygen',
                        amount: 1,
                    },
                ],
                producables: [
                    {
                        resourceName: 'vegetables',
                        amount: 6,
                    },
                    {
                        resourceName: 'organicWaste',
                        amount: 2,
                    },
                ],
                timeSteps: 200000,
                powerNeeded: 10,
                maxWorkers: 6,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.75,
        },
        pipeResourceNames: ['oxygen', 'water'],
    },
    meatLab: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
            {
                resourceName: 'steel',
                amount: 1500,
            },
        ],
        requiredTech: ['foodProcessing'],
        buildingSound: 'build life support',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 2,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'water',
                        amount: 3,
                    },
                    {
                        resourceName: 'stemCell',
                        amount: 2,
                    },
                ],
                producables: [
                    {
                        resourceName: 'meat',
                        amount: 6,
                    },
                    {
                        resourceName: 'organicWaste',
                        amount: 2,
                    },
                ],
                timeSteps: 200000,
                powerNeeded: 5,
                maxWorkers: 6,
            },
        },
        sideRoadOffset: {
            x: 2.15,
            y: 0,
            z: 1.25,
        },
        pipeResourceNames: ['water'],
    },
    foodFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 4000,
            },
            {
                resourceName: 'steel',
                amount: 5000,
            },
        ],
        requiredTech: ['foodProcessing'],
        buildingSound: 'build life support',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 8,
                    y: 2,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'vegetables',
                        amount: 3,
                    },
                    {
                        resourceName: 'meat',
                        amount: 3,
                    },
                ],
                producables: [
                    {
                        resourceName: 'goodFood',
                        amount: 3,
                    },
                    {
                        resourceName: 'organicWaste',
                        amount: 1,
                    },
                ],
                timeSteps: 100000,
                powerNeeded: 10,
                maxWorkers: 5,
            },
        },
        sideRoadOffset: {
            x: -1.2,
            y: 0,
            z: 1.25,
        },
    },
    park: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 10000,
            },
            {
                resourceName: 'steel',
                amount: 5000,
            },
        ],
        requiredTech: ['parks'],
        buildingSound: 'Generic placing',
        workingSound: 'Crowd LOOP',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.25,
                    z: 0,
                },
                size: {
                    x: 12,
                    y: 3,
                    z: 8,
                },
            },
        ],
        productionLogic: {
            type: 'areaOfEffect',
            upgradeName: 'fulfillNeed',
            resourceName: 'parkPoints',
            radius: 30,
            powerNeeded: 5,
            maxWorkers: 5,
        },
        sideRoadOffset: {
            x: -0.7,
            y: 0,
            z: 1.5,
        },
    },
    arena: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 50000,
            },
            {
                resourceName: 'steel',
                amount: 50000,
            },
        ],
        requiredTech: ['culture'],
        buildingSound: 'Generic placing',
        workingSound: 'Crowd LOOP',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2,
                    z: 0,
                },
                size: {
                    x: 22,
                    y: 6.5,
                    z: 18,
                },
            },
        ],
        productionLogic: {
            type: 'areaOfEffect',
            upgradeName: 'fulfillNeed',
            resourceName: 'culturePoints',
            radius: 75,
            powerNeeded: 20,
            maxWorkers: 20,
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 5,
        },
    },
    school: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 10000,
            },
            {
                resourceName: 'steel',
                amount: 20000,
            },
        ],
        requiredTech: ['schools'],
        buildingSound: 'Generic placing',
        workingSound: 'Crowd LOOP',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2.5,
                    z: 0,
                },
                size: {
                    x: 8,
                    y: 7,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'areaOfEffect',
            upgradeName: 'fulfillNeed',
            resourceName: 'schoolPoints',
            radius: 30,
            powerNeeded: 5,
            maxWorkers: 5,
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
    },
    habitatLevel1: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 1000,
            },
        ],
        buildingSound: 'build habitat',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 2,
                    z: 4,
                },
            },
        ],
        modelVariations: 3,
        productionLogic: {
            type: 'habitat',
            habitatLevel: 1,
            upgrade: 'habitatLevel2',
            maxInhabitants: 10,
            powerNeededForTenPeople: 1,
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1,
        },
        pipeResourceNames: ['oxygen', 'water'],
    },
    habitatLevel2: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 1500,
            },
            {
                resourceName: 'steel',
                amount: 1500,
            },
        ],
        buildingSound: 'build habitat',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 3.95,
                    y: 2,
                    z: 3.95,
                },
            },
        ],
        modelVariations: 3,
        productionLogic: {
            type: 'habitat',
            habitatLevel: 2,
            upgrade: 'habitatLevel3',
            downgrade: 'habitatLevel1',
            maxInhabitants: 12,
            powerNeededForTenPeople: 1,
        },
        sideRoadOffset: {
            x: 0.35,
            y: 0,
            z: 1,
        },
        pipeResourceNames: ['oxygen', 'water'],
    },
    habitatLevel3: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 1500,
            },
            {
                resourceName: 'steel',
                amount: 1500,
            },
        ],
        buildingSound: 'build habitat',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.25,
                    z: 0,
                },
                size: {
                    x: 3.9,
                    y: 2.5,
                    z: 3.9,
                },
            },
        ],
        modelVariations: 3,
        productionLogic: {
            type: 'habitat',
            habitatLevel: 3,
            upgrade: 'habitatLevel4',
            downgrade: 'habitatLevel2',
            maxInhabitants: 16,
            powerNeededForTenPeople: 2,
        },
        sideRoadOffset: {
            x: 0.425,
            y: 0,
            z: 0.5,
        },
        pipeResourceNames: ['oxygen', 'water'],
    },
    habitatLevel4: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 1500,
            },
            {
                resourceName: 'steel',
                amount: 1500,
            },
        ],
        buildingSound: 'build habitat',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.75,
                    z: 0,
                },
                size: {
                    x: 3.85,
                    y: 3.5,
                    z: 3.85,
                },
            },
        ],
        modelVariations: 6,
        productionLogic: {
            type: 'habitat',
            habitatLevel: 4,
            upgrade: 'habitatLevel5',
            downgrade: 'habitatLevel3',
            maxInhabitants: 24,
            powerNeededForTenPeople: 2,
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
        pipeResourceNames: ['oxygen', 'water'],
    },
    habitatLevel5: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 1500,
            },
            {
                resourceName: 'steel',
                amount: 1500,
            },
        ],
        buildingSound: 'build habitat',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2.5,
                    z: 0,
                },
                size: {
                    x: 3.8,
                    y: 7,
                    z: 3.8,
                },
            },
        ],
        modelVariations: 6,
        productionLogic: {
            type: 'habitat',
            habitatLevel: 5,
            upgrade: 'habitatLevel6',
            downgrade: 'habitatLevel4',
            maxInhabitants: 36,
            powerNeededForTenPeople: 3,
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
        pipeResourceNames: ['oxygen', 'water'],
    },
    habitatLevel6: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 1500,
            },
            {
                resourceName: 'steel',
                amount: 1500,
            },
        ],
        buildingSound: 'build habitat',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 6,
                    z: 0,
                },
                size: {
                    x: 3.75,
                    y: 14,
                    z: 3.75,
                },
            },
        ],
        modelVariations: 6,
        productionLogic: {
            type: 'habitat',
            habitatLevel: 6,
            downgrade: 'habitatLevel5',
            maxInhabitants: 52,
            powerNeededForTenPeople: 3,
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
        pipeResourceNames: ['oxygen', 'water'],
    },
    spacePort: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 15000,
            },
        ],
        buildingSound: 'Generic placing',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: -0.25,
                    z: 0,
                },
                size: {
                    x: 10,
                    y: 2.5,
                    z: 10,
                },
            },
        ],
        productionLogic: {
            type: 'population',
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1,
        },
    },
    spaceShipConstructionFacility: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 100000,
            },
            {
                resourceName: 'steel',
                amount: 50000,
            },
        ],
        requiredTech: ['spaceshipConstruction'],
        buildingSound: 'Generic placing',
        hasRoadConnection: false,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.5,
                    z: 0,
                },
                size: {
                    x: 22,
                    y: 2.5,
                    z: 28,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            logicOverride: 'spaceship',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'spaceshipModule',
                        amount: 1,
                    },
                ],
                timeSteps: 300000,
                powerNeeded: 50,
                maxWorkers: 25,
            },
        },
        //"sideRoadOffset": {"x": -3.5, "y": 0, "z": 0},
        pipeResourceNames: ['methane', 'water', 'oxygen', 'crudeOil'],
        netEdges: [
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_concrete_oneWay_threeLane',
                startPos: {
                    x: 12,
                    y: 0.2,
                    z: -1,
                },
                endPos: {
                    x: 7,
                    y: 0.2,
                    z: -1,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_concrete_oneWay_threeLane',
                startPos: {
                    x: 12,
                    y: 0.2,
                    z: 1,
                },
                endPos: {
                    x: 7,
                    y: 0.2,
                    z: 1,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_concrete_oneWay_threeLane',
                startPos: {
                    x: -12,
                    y: 0.2,
                    z: -1,
                },
                endPos: {
                    x: -7,
                    y: 0.2,
                    z: -1,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_concrete_oneWay_threeLane',
                startPos: {
                    x: -12,
                    y: 0.2,
                    z: 1,
                },
                endPos: {
                    x: -7,
                    y: 0.2,
                    z: 1,
                },
                trafficType: 'incoming',
            },
        ],
    },
    spacePortFTLPortal: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 150,
            },
            {
                resourceName: 'steel',
                amount: 500,
            },
        ],
        buildingSound: 'Generic placing',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: -0.25,
                    z: 0,
                },
                size: {
                    x: 2,
                    y: 1.78,
                    z: 2,
                },
            },
            {
                type: 'capsule',
                center: {
                    x: 0,
                    y: 2.22,
                    z: 0,
                },
                radius: 0.33,
                height: 4.2,
            },
        ],
        productionLogic: {
            type: 'goal',
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 4,
        },
    },
    recyclingCenter: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 10000,
            },
            {
                resourceName: 'steel',
                amount: 5000,
            },
        ],
        requiredTech: ['recycling'],
        buildingSound: 'Generic placing',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.5,
                    z: 0,
                },
                size: {
                    x: 8,
                    y: 4,
                    z: 4,
                },
            },
        ],
        upgradeEffect: {
            radius: 20,
            upgradeType: 'industrialWasteRecycling',
        },
        sideRoadOffset: {
            x: -0.3,
            y: 0,
            z: 0.5,
        },
    },
    soilEnrichmentFacility: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 10000,
            },
            {
                resourceName: 'steel',
                amount: 5000,
            },
        ],
        requiredTech: ['fertilizer'],
        buildingSound: 'Generic placing',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.25,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 3,
                    z: 6,
                },
            },
        ],
        upgradeEffect: {
            radius: 16,
            upgradeType: 'soilEnrichment',
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 2,
        },
    },
    powerPole: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 500,
            },
        ],
        doesAlwaysWork: true,
        doesAffectTerrain: false,
        hasRoadConnection: false,
        buildingSystem: 'power',
        buildingSound: 'pole placing',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.5,
                    z: 0,
                },
                size: {
                    x: 2,
                    y: 5,
                    z: 2,
                },
            },
        ],
        placesBuildingConnector: 'powerLine',
        inBetweenObject: 'powerPole',
        powerRadius: 15,
        buildingTiltRatio: 1,
    },
    powerSubstation: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 10000,
            },
            {
                resourceName: 'steel',
                amount: 2500,
            },
        ],
        hasRoadConnection: false,
        requiredTech: ['powerSubstation'],
        buildingSystem: 'power',
        buildingSound: 'Power Station Placed',
        // "workingSound": "High voltage LOOP", prob too annoying
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.75,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 3.5,
                    z: 4,
                },
            },
        ],
        powerRadius: 60,
    },
    windTurbine: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
        ],
        hasRoadConnection: false,
        buildingSystem: 'power',
        buildingSound: 'Power Station Placed',
        workingSound: 'High voltage LOOP',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2.5,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 7,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [],
                timeSteps: 100000,
                powerOutput: 20,
                maxWorkers: 0,
            },
        },
        windEfficiencyRadius: 15,
        buildingTiltRatio: 1,
    },
    solarPowerPlant: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 15000,
            },
            {
                resourceName: 'steel',
                amount: 15000,
            },
        ],
        hasRoadConnection: false,
        requiredTech: ['solarPanels'],
        buildingSystem: 'power',
        buildingSound: 'Power Station Placed',
        workingSound: 'High voltage LOOP',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 14,
                    y: 2,
                    z: 12,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [],
                timeSteps: 100000,
                powerOutput: 50,
                maxWorkers: 2,
            },
        },
        buildingConnectorPoints: {
            powerLine: [
                {
                    x: -0.591,
                    y: 2.384,
                    z: 5.545,
                },
            ],
        },
    },
    solarPowerPlant_Variation: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 15000,
            },
            {
                resourceName: 'steel',
                amount: 15000,
            },
        ],
        hasRoadConnection: false,
        requiredTech: ['solarPanels'],
        buildingSystem: 'power',
        buildingSound: 'Power Station Placed',
        workingSound: 'High voltage LOOP',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 4,
                },
                size: {
                    x: 14,
                    y: 2,
                    z: 4,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 10,
                    y: 2,
                    z: 4,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: -4,
                },
                size: {
                    x: 6,
                    y: 2,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [],
                timeSteps: 100000,
                powerOutput: 50,
                maxWorkers: 2,
            },
        },
        buildingConnectorPoints: {
            powerLine: [
                {
                    x: -0.591,
                    y: 2.384,
                    z: 5.545,
                },
            ],
        },
    },
    nuclearPowerPlant: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 75000,
            },
            {
                resourceName: 'steel',
                amount: 50000,
            },
        ],
        requiredTech: ['nuclearPower'],
        buildingSystem: 'power',
        buildingSound: 'Power Station Placed',
        workingSound: 'High voltage LOOP',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2,
                    z: 0,
                },
                size: {
                    x: 20,
                    y: 6.5,
                    z: 20,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'uranium',
                        amount: 10,
                    },
                    {
                        resourceName: 'water',
                        amount: 15,
                    },
                ],
                producables: [],
                timeSteps: 600000,
                powerOutput: 750,
                maxWorkers: 10,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 5,
        },
        buildingConnectorPoints: {
            powerLine: [
                {
                    x: 5.5,
                    y: 3.3,
                    z: 0,
                },
                {
                    x: 3.9,
                    y: 3.3,
                    z: 3.9,
                },
                {
                    x: 0,
                    y: 3.3,
                    z: 5.5,
                },
                {
                    x: -3.9,
                    y: 3.3,
                    z: 3.9,
                },
                {
                    x: -5.5,
                    y: 3.3,
                    z: 0,
                },
                {
                    x: -3.9,
                    y: 3.3,
                    z: -3.9,
                },
                {
                    x: 0,
                    y: 3.3,
                    z: -5.5,
                },
                {
                    x: 3.9,
                    y: 3.3,
                    z: -3.9,
                },
            ],
        },
        pipeResourceNames: ['water'],
    },
    fastNeutronReactor: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 200000,
            },
            {
                resourceName: 'steel',
                amount: 125000,
            },
        ],
        requiredTech: ['fastNeutronReactor'],
        buildingSystem: 'power',
        buildingSound: 'Power Station Placed',
        workingSound: 'High voltage LOOP',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 4,
                    z: 0,
                },
                size: {
                    x: 20,
                    y: 11,
                    z: 20,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'enrichedUranium',
                        amount: 50,
                    },
                    {
                        resourceName: 'water',
                        amount: 25,
                    },
                ],
                producables: [],
                timeSteps: 1500000,
                powerOutput: 2000,
                maxWorkers: 25,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 5,
        },
        buildingConnectorPoints: {
            powerLine: [
                {
                    x: 5.5,
                    y: 3.3,
                    z: 0,
                },
                {
                    x: 3.9,
                    y: 3.3,
                    z: 3.9,
                },
                {
                    x: 0,
                    y: 3.3,
                    z: 5.5,
                },
                {
                    x: -3.9,
                    y: 3.3,
                    z: 3.9,
                },
                {
                    x: -5.5,
                    y: 3.3,
                    z: 0,
                },
                {
                    x: -3.9,
                    y: 3.3,
                    z: -3.9,
                },
                {
                    x: 0,
                    y: 3.3,
                    z: -5.5,
                },
                {
                    x: 3.9,
                    y: 3.3,
                    z: -3.9,
                },
            ],
        },
        pipeResourceNames: ['water'],
    },
    waterAirFilter: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 1000,
            },
            {
                resourceName: 'steel',
                amount: 500,
            },
        ],
        requiredTech: [],
        buildingSound: 'Water building placing',
        workingSound: 'Water buildings LOOP pump',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.5,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'water',
                        amount: 1,
                    },
                ],
                timeSteps: 25000,
                powerNeeded: 4,
                maxWorkers: 2,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.25,
        },
        pipeResourceNames: ['water'],
    },
    waterWellHydraulic: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2000,
            },
            {
                resourceName: 'steel',
                amount: 4000,
            },
        ],
        requiredTech: ['groundWaterExtraction'],
        buildingSound: 'Water building placing',
        workingSound: 'Water buildings LOOP pump',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.5,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 3,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'water',
                        amount: 5,
                    },
                ],
                timeSteps: 50000,
                powerNeeded: 10,
                maxWorkers: 2,
            },
        },
        sideRoadOffset: {
            x: -1.4,
            y: 0,
            z: 1.5,
        },
        pipeResourceNames: ['water'],
    },
    waterTank: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2500,
            },
            {
                resourceName: 'steel',
                amount: 2500,
            },
        ],
        hasRoadConnection: false,
        requiredTech: ['tanks'],
        buildingSound: 'Water building placing',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 5.25,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'liquidTank',
            resourceName: 'water',
            maxCapacity: 250,
        },
        pipeResourceNames: ['water'],
    },
    methaneDrill: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2500,
            },
            {
                resourceName: 'steel',
                amount: 2500,
            },
        ],
        requiredTech: ['methane'],
        buildingSound: 'Methane placing',
        workingSound: 'Methane LOOP',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.5,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'methane',
                        amount: 1,
                    },
                ],
                timeSteps: 50000,
                powerNeeded: 4,
                maxWorkers: 2,
                yieldResourceName: 'MethaneCollider',
                hasResourceRotation: false,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.25,
        },
        pipeResourceNames: ['methane'],
    },
    methaneFermentationPlant: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 10000,
            },
            {
                resourceName: 'steel',
                amount: 7500,
            },
        ],
        requiredTech: ['methaneFermentation'],
        buildingSound: 'Methane placing',
        workingSound: 'Methane LOOP',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 3,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'organicWaste',
                        amount: 3,
                    },
                ],
                producables: [
                    {
                        resourceName: 'methane',
                        amount: 2,
                    },
                ],
                timeSteps: 100000,
                powerNeeded: 10,
                maxWorkers: 4,
            },
        },
        sideRoadOffset: {
            x: 0.125,
            y: 0,
            z: 1.25,
        },
        pipeResourceNames: ['methane'],
    },
    methanePowerPlant: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 15000,
            },
            {
                resourceName: 'steel',
                amount: 25000,
            },
        ],
        requiredTech: ['methanePowerPlants'],
        buildingSystem: 'power',
        buildingSound: 'Methane placing',
        workingSound: 'Methane LOOP',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2,
                    z: 0,
                },
                size: {
                    x: 8,
                    y: 5,
                    z: 8,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'methane',
                        amount: 10,
                    },
                ],
                producables: [],
                timeSteps: 300000,
                powerOutput: 400,
                maxWorkers: 5,
            },
        },
        sideRoadOffset: {
            x: -1.65,
            y: 0,
            z: 2.5,
        },
        pipeResourceNames: ['methane'],
    },
    methaneTank: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
            {
                resourceName: 'steel',
                amount: 5000,
            },
        ],
        hasRoadConnection: false,
        requiredTech: ['methane', 'tanks'],
        buildingSound: 'Methane placing',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 5.25,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'liquidTank',
            resourceName: 'methane',
            maxCapacity: 250,
        },
        pipeResourceNames: ['methane'],
    },
    crudeOilTank: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2500,
            },
            {
                resourceName: 'steel',
                amount: 2500,
            },
        ],
        hasRoadConnection: false,
        requiredTech: ['tanks'],
        buildingSound: 'Methane placing',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 5.25,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'liquidTank',
            resourceName: 'crudeOil',
            maxCapacity: 250,
        },
        pipeResourceNames: ['crudeOil'],
    },
    waterDistillery: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
            {
                resourceName: 'steel',
                amount: 2500,
            },
        ],
        requiredTech: ['nanotubes'],
        buildingSound: 'Water building placing',
        workingSound: 'Water buildings LOOP pump',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.5,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 2.5,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'water',
                        amount: 5,
                    },
                ],
                producables: [
                    {
                        resourceName: 'distilledWater',
                        amount: 2,
                    },
                ],
                timeSteps: 50000,
                powerNeeded: 10,
                maxWorkers: 5,
            },
        },
        sideRoadOffset: {
            x: 2,
            y: 0,
            z: 2.25,
        },
        pipeResourceNames: ['water'],
    },
    oxygenTank: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2500,
            },
            {
                resourceName: 'steel',
                amount: 2500,
            },
        ],
        hasRoadConnection: false,
        requiredTech: ['tanks'],
        buildingSound: 'Methane placing',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 3,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'liquidTank',
            resourceName: 'oxygen',
            maxCapacity: 250,
        },
        pipeResourceNames: ['oxygen'],
    },
    infiniteProducer: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 15,
            },
            {
                resourceName: 'steel',
                amount: 50,
            },
        ],
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: -0.25,
                    z: 0,
                },
                size: {
                    x: 2,
                    y: 1.78,
                    z: 2,
                },
            },
            {
                type: 'capsule',
                center: {
                    x: 0,
                    y: 2.22,
                    z: 0,
                },
                radius: 0.33,
                height: 4.2,
            },
        ],
        productionLogic: {
            type: 'infinite',
            producablesNames: ['car'],
        },
    },
    infiniteConsumer: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 15,
            },
            {
                resourceName: 'steel',
                amount: 50,
            },
        ],
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: -0.25,
                    z: 0,
                },
                size: {
                    x: 2,
                    y: 1.78,
                    z: 2,
                },
            },
            {
                type: 'capsule',
                center: {
                    x: 0,
                    y: 2.22,
                    z: 0,
                },
                radius: 0.33,
                height: 4.2,
            },
        ],
        productionLogic: {
            type: 'infinite',
            consumablesNames: ['car'],
        },
    },
    signStanding: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 25000,
            },
            {
                resourceName: 'steel',
                amount: 10000,
            },
        ],
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 2,
                    y: 2,
                    z: 2,
                },
            },
        ],
        hasRoadConnection: false,
        continueBuilding: false,
        buildingTiltRatio: 1,
        textModule: {
            scaffoldTemplate: 'Buildings/signScaffoldStanding',
            letterOffset: {
                x: 0,
                y: 1,
                z: 0,
            },
        },
    },
    signLaying: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 25000,
            },
            {
                resourceName: 'steel',
                amount: 10000,
            },
        ],
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 2,
                    y: 2,
                    z: 2,
                },
            },
        ],
        hasRoadConnection: false,
        continueBuilding: false,
        buildingTiltRatio: 1,
        textModule: {
            scaffoldTemplate: 'Buildings/signScaffoldLaying',
            letterOffset: {
                x: 0,
                y: 0.92,
                z: 0,
            },
        },
    },
    monumentDrill_Stage0: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 150000,
            },
            {
                resourceName: 'steel',
                amount: 350000,
            },
        ],
        requiredTech: ['adamantineMining'],
        localizationOverride: 'monumentDrill',
        hasRoadConnection: false,
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 8,
                    z: 0,
                },
                size: {
                    x: 46,
                    y: 16,
                    z: 46,
                },
            },
        ],
        productionLogic: {
            type: 'upgrade',
            costs: [
                {
                    resourceName: 'sensor',
                    amount: 250,
                },
                {
                    resourceName: 'highTechTool',
                    amount: 100,
                },
            ],
            nextLevelBuilding: 'monumentDrill_Stage1',
        },
        // "sideRoadOffset": {"x": 0, "y": 0, "z":  17}
        netEdges: [
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 24,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: 18,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -24,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: -18,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -2,
                    y: 0.2,
                    z: 24,
                },
                endPos: {
                    x: -2,
                    y: 0.2,
                    z: 18,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 0,
                    y: 0.2,
                    z: 18,
                },
                endPos: {
                    x: 0,
                    y: 0.2,
                    z: 24,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 2,
                    y: 0.2,
                    z: 24,
                },
                endPos: {
                    x: 2,
                    y: 0.2,
                    z: 18,
                },
                trafficType: 'incoming',
            },
        ],
    },
    monumentDrill_Stage1: {
        localizationOverride: 'monumentDrill',
        hasRoadConnection: false,
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 8,
                    z: 0,
                },
                size: {
                    x: 46,
                    y: 16,
                    z: 46,
                },
            },
        ],
        productionLogic: {
            type: 'upgrade',
            costs: [
                {
                    resourceName: 'concrete',
                    amount: 1000,
                },
                {
                    resourceName: 'steel',
                    amount: 1500,
                },
                {
                    resourceName: 'motor',
                    amount: 150,
                },
                {
                    resourceName: 'computer',
                    amount: 75,
                },
            ],
            nextLevelBuilding: 'monumentDrill_Stage2',
        },
        //"sideRoadOffset": {"x": 0, "y": 0, "z":  17}
        netEdges: [
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 24,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: 18,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -24,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: -18,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -2,
                    y: 0.2,
                    z: 24,
                },
                endPos: {
                    x: -2,
                    y: 0.2,
                    z: 18,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 0,
                    y: 0.2,
                    z: 18,
                },
                endPos: {
                    x: 0,
                    y: 0.2,
                    z: 24,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 2,
                    y: 0.2,
                    z: 24,
                },
                endPos: {
                    x: 2,
                    y: 0.2,
                    z: 18,
                },
                trafficType: 'incoming',
            },
        ],
    },
    monumentDrill_Stage2: {
        localizationOverride: 'monumentDrill',
        hasRoadConnection: false,
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 9,
                    z: 0,
                },
                size: {
                    x: 46,
                    y: 18,
                    z: 46,
                },
            },
        ],
        productionLogic: {
            type: 'upgrade',
            costs: [
                {
                    resourceName: 'concrete',
                    amount: 500,
                },
                {
                    resourceName: 'steel',
                    amount: 1500,
                },
                {
                    resourceName: 'neuralProcessor',
                    amount: 75,
                },
                {
                    resourceName: 'radiationCore',
                    amount: 125,
                },
            ],
            nextLevelBuilding: 'monumentDrill_Stage3',
        },
        //"sideRoadOffset": {"x": 0, "y": 0, "z":  17}
        netEdges: [
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 24,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: 18,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -24,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: -18,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -2,
                    y: 0.2,
                    z: 24,
                },
                endPos: {
                    x: -2,
                    y: 0.2,
                    z: 18,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 0,
                    y: 0.2,
                    z: 18,
                },
                endPos: {
                    x: 0,
                    y: 0.2,
                    z: 24,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 2,
                    y: 0.2,
                    z: 24,
                },
                endPos: {
                    x: 2,
                    y: 0.2,
                    z: 18,
                },
                trafficType: 'incoming',
            },
        ],
    },
    monumentDrill_Stage3: {
        localizationOverride: 'monumentDrill',
        hasRoadConnection: false,
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 9,
                    z: 0,
                },
                size: {
                    x: 46,
                    y: 18,
                    z: 46,
                },
            },
        ],
        productionLogic: {
            type: 'upgrade',
            costs: [
                {
                    resourceName: 'concrete',
                    amount: 500,
                },
                {
                    resourceName: 'steel',
                    amount: 1000,
                },
                {
                    resourceName: 'aiControlUnit',
                    amount: 100,
                },
                {
                    resourceName: 'superconductor',
                    amount: 150,
                },
            ],
            nextLevelBuilding: 'monumentDrill_Stage4',
        },
        //"sideRoadOffset": {"x": 0, "y": 0, "z":  17}
        netEdges: [
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 24,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: 18,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -24,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: -18,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -2,
                    y: 0.2,
                    z: 24,
                },
                endPos: {
                    x: -2,
                    y: 0.2,
                    z: 18,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 0,
                    y: 0.2,
                    z: 18,
                },
                endPos: {
                    x: 0,
                    y: 0.2,
                    z: 24,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 2,
                    y: 0.2,
                    z: 24,
                },
                endPos: {
                    x: 2,
                    y: 0.2,
                    z: 18,
                },
                trafficType: 'incoming',
            },
        ],
    },
    monumentDrill_Stage4: {
        localizationOverride: 'monumentDrill',
        hasRoadConnection: false,
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 9,
                    z: 0,
                },
                size: {
                    x: 46,
                    y: 18,
                    z: 46,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'sciencePack4',
                        amount: 4,
                    },
                    {
                        resourceName: 'superconductor',
                        amount: 16,
                    },
                    {
                        resourceName: 'methane',
                        amount: 35,
                    },
                ],
                producables: [
                    {
                        resourceName: 'adamantine',
                        amount: 10,
                    },
                ],
                timeSteps: 1200000,
                powerNeeded: 1500,
                maxWorkers: 150,
            },
        },
        //"sideRoadOffset": {"x": 0, "y": 0, "z":  17},
        pipeResourceNames: ['methane'],
        netEdges: [
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 24,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: 18,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -24,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: -18,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -2,
                    y: 0.2,
                    z: 24,
                },
                endPos: {
                    x: -2,
                    y: 0.2,
                    z: 18,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 0,
                    y: 0.2,
                    z: 18,
                },
                endPos: {
                    x: 0,
                    y: 0.2,
                    z: 24,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 2,
                    y: 0.2,
                    z: 24,
                },
                endPos: {
                    x: 2,
                    y: 0.2,
                    z: 18,
                },
                trafficType: 'incoming',
            },
        ],
    },
    trainstation_1R: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
            {
                resourceName: 'steel',
                amount: 10000,
            },
        ],
        requiredTech: ['trains'],
        hasRoadConnection: false,
        buildingSound: 'build misc',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.25,
                    z: -1,
                },
                size: {
                    x: 8,
                    y: 2.8,
                    z: 6,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.25,
                    z: -4.75,
                },
                size: {
                    x: 4,
                    y: 2.8,
                    z: 2.5,
                },
            },
        ],
        stationModule: 'train',
        netEdges: [
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -1,
                    y: 0.2,
                    z: -5,
                },
                endPos: {
                    x: -1,
                    y: 0.2,
                    z: -7,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 1,
                    y: 0.2,
                    z: -7,
                },
                endPos: {
                    x: 1,
                    y: 0.2,
                    z: -5,
                },
                trafficType: 'incoming',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: -5,
                    y: 0.2,
                    z: -1,
                },
                endPos: {
                    x: 5,
                    y: 0.2,
                    z: -1,
                },
                trafficType: 'through',
            },
        ],
    },
    trainstation_2R: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 15000,
            },
            {
                resourceName: 'steel',
                amount: 20000,
            },
        ],
        requiredTech: ['trains'],
        hasRoadConnection: false,
        buildingSound: 'build misc',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.25,
                    z: 0,
                },
                size: {
                    x: 24,
                    y: 2.8,
                    z: 8,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.25,
                    z: 6,
                },
                size: {
                    x: 16,
                    y: 2.8,
                    z: 4,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.25,
                    z: -6,
                },
                size: {
                    x: 16,
                    y: 2.8,
                    z: 4,
                },
            },
        ],
        stationModule: 'train',
        netEdges: [
            {
                type: 'road', // outgoing in the corner bottom left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -6,
                    y: 0.2,
                    z: 5,
                },
                endPos: {
                    x: -9,
                    y: 0.2,
                    z: 7,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // incoming in the middle bottom left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -1,
                    y: 0.2,
                    z: 9,
                },
                endPos: {
                    x: -1,
                    y: 0.2,
                    z: 6,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle top left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 1,
                    y: 0.2,
                    z: 6,
                },
                endPos: {
                    x: 1,
                    y: 0.2,
                    z: 9,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // incoming in the corner top left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 9,
                    y: 0.2,
                    z: 7,
                },
                endPos: {
                    x: 6,
                    y: 0.2,
                    z: 5,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the corner bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -9,
                    y: 0.2,
                    z: -7,
                },
                endPos: {
                    x: -6,
                    y: 0.2,
                    z: -5,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -1,
                    y: 0.2,
                    z: -6,
                },
                endPos: {
                    x: -1,
                    y: 0.2,
                    z: -9,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 1,
                    y: 0.2,
                    z: -9,
                },
                endPos: {
                    x: 1,
                    y: 0.2,
                    z: -6,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the corner top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 6,
                    y: 0.2,
                    z: -5,
                },
                endPos: {
                    x: 9,
                    y: 0.2,
                    z: -7,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: 13,
                    y: 0.2,
                    z: 1,
                },
                endPos: {
                    x: -13,
                    y: 0.2,
                    z: 1,
                },
                trafficType: 'through',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: -13,
                    y: 0.2,
                    z: -1,
                },
                endPos: {
                    x: 13,
                    y: 0.2,
                    z: -1,
                },
                trafficType: 'through',
            },
        ],
    },
    trainstation_4R: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 25000,
            },
            {
                resourceName: 'steel',
                amount: 40000,
            },
        ],
        requiredTech: ['trains'],
        hasRoadConnection: false,
        buildingSound: 'build misc',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.25,
                    z: 0,
                },
                size: {
                    x: 24,
                    y: 2.8,
                    z: 12,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.25,
                    z: 8,
                },
                size: {
                    x: 16,
                    y: 2.8,
                    z: 4,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.25,
                    z: -8,
                },
                size: {
                    x: 16,
                    y: 2.8,
                    z: 4,
                },
            },
        ],
        stationModule: 'train',
        netEdges: [
            {
                type: 'road', // outgoing in the corner bottom left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -6,
                    y: 0.2,
                    z: 7,
                },
                endPos: {
                    x: -9,
                    y: 0.2,
                    z: 9,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // incoming in the middle bottom left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -1,
                    y: 0.2,
                    z: 11,
                },
                endPos: {
                    x: -1,
                    y: 0.2,
                    z: 8,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle top left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 1,
                    y: 0.2,
                    z: 8,
                },
                endPos: {
                    x: 1,
                    y: 0.2,
                    z: 11,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // incoming in the corner top left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 9,
                    y: 0.2,
                    z: 9,
                },
                endPos: {
                    x: 6,
                    y: 0.2,
                    z: 7,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the corner bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -9,
                    y: 0.2,
                    z: -9,
                },
                endPos: {
                    x: -6,
                    y: 0.2,
                    z: -7,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -1,
                    y: 0.2,
                    z: -8,
                },
                endPos: {
                    x: -1,
                    y: 0.2,
                    z: -11,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 1,
                    y: 0.2,
                    z: -11,
                },
                endPos: {
                    x: 1,
                    y: 0.2,
                    z: -8,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the corner top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 6,
                    y: 0.2,
                    z: -7,
                },
                endPos: {
                    x: 9,
                    y: 0.2,
                    z: -9,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: 13,
                    y: 0.2,
                    z: 3,
                },
                endPos: {
                    x: -13,
                    y: 0.2,
                    z: 3,
                },
                trafficType: 'through',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: 13,
                    y: 0.2,
                    z: 1,
                },
                endPos: {
                    x: -13,
                    y: 0.2,
                    z: 1,
                },
                trafficType: 'through',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: -13,
                    y: 0.2,
                    z: -1,
                },
                endPos: {
                    x: 13,
                    y: 0.2,
                    z: -1,
                },
                trafficType: 'through',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: -13,
                    y: 0.2,
                    z: -3,
                },
                endPos: {
                    x: 13,
                    y: 0.2,
                    z: -3,
                },
                trafficType: 'through',
            },
        ],
    },
    trainstation_6R: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 35000,
            },
            {
                resourceName: 'steel',
                amount: 60000,
            },
        ],
        requiredTech: ['trains'],
        hasRoadConnection: false,
        buildingSound: 'build misc',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.25,
                    z: 0,
                },
                size: {
                    x: 24,
                    y: 2.8,
                    z: 16,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.25,
                    z: 10,
                },
                size: {
                    x: 16,
                    y: 2.8,
                    z: 4,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.25,
                    z: -10,
                },
                size: {
                    x: 16,
                    y: 2.8,
                    z: 4,
                },
            },
        ],
        stationModule: 'train',
        netEdges: [
            {
                type: 'road', // outgoing in the corner bottom left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -6,
                    y: 0.2,
                    z: 9,
                },
                endPos: {
                    x: -9,
                    y: 0.2,
                    z: 11,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // incoming in the middle bottom left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -1,
                    y: 0.2,
                    z: 13,
                },
                endPos: {
                    x: -1,
                    y: 0.2,
                    z: 10,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle top left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 1,
                    y: 0.2,
                    z: 10,
                },
                endPos: {
                    x: 1,
                    y: 0.2,
                    z: 13,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // incoming in the corner top left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 9,
                    y: 0.2,
                    z: 11,
                },
                endPos: {
                    x: 6,
                    y: 0.2,
                    z: 9,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the corner bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -9,
                    y: 0.2,
                    z: -11,
                },
                endPos: {
                    x: -6,
                    y: 0.2,
                    z: -9,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -1,
                    y: 0.2,
                    z: -10,
                },
                endPos: {
                    x: -1,
                    y: 0.2,
                    z: -13,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 1,
                    y: 0.2,
                    z: -13,
                },
                endPos: {
                    x: 1,
                    y: 0.2,
                    z: -10,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the corner top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 6,
                    y: 0.2,
                    z: -9,
                },
                endPos: {
                    x: 9,
                    y: 0.2,
                    z: -11,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: 13,
                    y: 0.2,
                    z: 5,
                },
                endPos: {
                    x: -13,
                    y: 0.2,
                    z: 5,
                },
                trafficType: 'through',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: 13,
                    y: 0.2,
                    z: 3,
                },
                endPos: {
                    x: -13,
                    y: 0.2,
                    z: 3,
                },
                trafficType: 'through',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: 13,
                    y: 0.2,
                    z: 1,
                },
                endPos: {
                    x: -13,
                    y: 0.2,
                    z: 1,
                },
                trafficType: 'through',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: -13,
                    y: 0.2,
                    z: -1,
                },
                endPos: {
                    x: 13,
                    y: 0.2,
                    z: -1,
                },
                trafficType: 'through',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: -13,
                    y: 0.2,
                    z: -3,
                },
                endPos: {
                    x: 13,
                    y: 0.2,
                    z: -3,
                },
                trafficType: 'through',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: -13,
                    y: 0.2,
                    z: -5,
                },
                endPos: {
                    x: 13,
                    y: 0.2,
                    z: -5,
                },
                trafficType: 'through',
            },
        ],
    },
    trainstation_8R: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 50000,
            },
            {
                resourceName: 'steel',
                amount: 75000,
            },
        ],
        requiredTech: ['trains'],
        hasRoadConnection: false,
        buildingSound: 'build misc',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.25,
                    z: 0,
                },
                size: {
                    x: 24,
                    y: 2.8,
                    z: 20,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.25,
                    z: 12,
                },
                size: {
                    x: 16,
                    y: 2.8,
                    z: 4,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.25,
                    z: -12,
                },
                size: {
                    x: 16,
                    y: 2.8,
                    z: 4,
                },
            },
        ],
        stationModule: 'train',
        netEdges: [
            {
                type: 'road', // outgoing in the corner bottom left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -6,
                    y: 0.2,
                    z: 11,
                },
                endPos: {
                    x: -9,
                    y: 0.2,
                    z: 13,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // incoming in the middle bottom left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -1,
                    y: 0.2,
                    z: 15,
                },
                endPos: {
                    x: -1,
                    y: 0.2,
                    z: 12,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle top left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 1,
                    y: 0.2,
                    z: 12,
                },
                endPos: {
                    x: 1,
                    y: 0.2,
                    z: 15,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // incoming in the corner top left
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 9,
                    y: 0.2,
                    z: 13,
                },
                endPos: {
                    x: 6,
                    y: 0.2,
                    z: 11,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the corner bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -9,
                    y: 0.2,
                    z: -13,
                },
                endPos: {
                    x: -6,
                    y: 0.2,
                    z: -11,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -1,
                    y: 0.2,
                    z: -12,
                },
                endPos: {
                    x: -1,
                    y: 0.2,
                    z: -15,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 1,
                    y: 0.2,
                    z: -15,
                },
                endPos: {
                    x: 1,
                    y: 0.2,
                    z: -12,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the corner top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 6,
                    y: 0.2,
                    z: -11,
                },
                endPos: {
                    x: 9,
                    y: 0.2,
                    z: -13,
                },
                trafficType: 'outgoing',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: 13,
                    y: 0.2,
                    z: 7,
                },
                endPos: {
                    x: -13,
                    y: 0.2,
                    z: 7,
                },
                trafficType: 'through',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: 13,
                    y: 0.2,
                    z: 5,
                },
                endPos: {
                    x: -13,
                    y: 0.2,
                    z: 5,
                },
                trafficType: 'through',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: 13,
                    y: 0.2,
                    z: 3,
                },
                endPos: {
                    x: -13,
                    y: 0.2,
                    z: 3,
                },
                trafficType: 'through',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: 13,
                    y: 0.2,
                    z: 1,
                },
                endPos: {
                    x: -13,
                    y: 0.2,
                    z: 1,
                },
                trafficType: 'through',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: -13,
                    y: 0.2,
                    z: -1,
                },
                endPos: {
                    x: 13,
                    y: 0.2,
                    z: -1,
                },
                trafficType: 'through',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: -13,
                    y: 0.2,
                    z: -3,
                },
                endPos: {
                    x: 13,
                    y: 0.2,
                    z: -3,
                },
                trafficType: 'through',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: -13,
                    y: 0.2,
                    z: -5,
                },
                endPos: {
                    x: 13,
                    y: 0.2,
                    z: -5,
                },
                trafficType: 'through',
            },
            {
                type: 'rail',
                name: 'rail_oneWay',
                startPos: {
                    x: -13,
                    y: 0.2,
                    z: -7,
                },
                endPos: {
                    x: 13,
                    y: 0.2,
                    z: -7,
                },
                trafficType: 'through',
            },
        ],
    },
    targetingStation: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 25000,
            },
            {
                resourceName: 'steel',
                amount: 25000,
            },
        ],
        hasRoadConnection: true,
        requiredTech: [],
        buildingSound: 'Terraforming building placing',
        workingSound: 'Terraforming Loop',
        continueBuilding: false,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 4,
                    z: 6,
                },
            },
            {
                type: 'box',
                center: {
                    x: 1.5,
                    y: 5,
                    z: 0,
                },
                size: {
                    x: 2,
                    y: 5,
                    z: 2,
                },
            },
        ],
        productionLogic: {
            type: 'laser',
            maxWorkers: 0,
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.75,
        },
    },
    filteringMeshFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 10000,
            },
            {
                resourceName: 'steel',
                amount: 15000,
            },
            {
                resourceName: 'adamantine',
                amount: 500,
            },
        ],
        requiredTech: ['terraforming'],
        buildingSound: 'Terraforming building placing',
        workingSound: 'Terraforming loop',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 2.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'heatExchanger',
                        amount: 2,
                    },
                    {
                        resourceName: 'neuralProcessor',
                        amount: 1,
                    },
                ],
                producables: [
                    {
                        resourceName: 'filteringMesh',
                        amount: 4,
                    },
                ],
                timeSteps: 300000,
                powerNeeded: 10,
                maxWorkers: 5,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
    },
    advancedFilteringMeshFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 25000,
            },
            {
                resourceName: 'steel',
                amount: 40000,
            },
            {
                resourceName: 'adamantine',
                amount: 1500,
            },
        ],
        requiredTech: ['groundAcidityRegulation'],
        buildingSound: 'Terraforming building placing',
        workingSound: 'Terraforming loop',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.75,
                    z: 0,
                },
                size: {
                    x: 10,
                    y: 3.5,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'sciencePack2',
                        amount: 2,
                    },
                    {
                        resourceName: 'aiControlUnit',
                        amount: 2,
                    },
                    {
                        resourceName: 'filteringMesh',
                        amount: 6,
                    },
                ],
                producables: [
                    {
                        resourceName: 'advancedFilteringMesh',
                        amount: 2,
                    },
                ],
                timeSteps: 600000,
                powerNeeded: 50,
                maxWorkers: 15,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
    },
    superconductingCoilFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 15000,
            },
            {
                resourceName: 'steel',
                amount: 30000,
            },
            {
                resourceName: 'adamantine',
                amount: 2500,
            },
        ],
        requiredTech: ['magneticFieldGeneration'],
        buildingSound: 'Terraforming building placing',
        workingSound: 'Terraforming loop',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 2.5,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'superconductor',
                        amount: 2,
                    },
                    {
                        resourceName: 'radiationCore',
                        amount: 4,
                    },
                ],
                producables: [
                    {
                        resourceName: 'superconductingCoil',
                        amount: 1,
                    },
                ],
                timeSteps: 300000,
                powerNeeded: 25,
                maxWorkers: 12,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.5,
        },
    },
    dustParticleFilter: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 15000,
            },
            {
                resourceName: 'steel',
                amount: 10000,
            },
            {
                resourceName: 'adamantine',
                amount: 500,
            },
        ],
        requiredTech: ['terraforming'],
        buildingSound: 'Terraforming building placing',
        workingSound: 'Terraforming loop',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            logicOverride: 'terraformer',
            terraformType: 'dustParticleFiltering',
            terraformRadius: 75,
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'filteringMesh',
                        amount: 2,
                    },
                ],
                producables: [],
                timeSteps: 300000,
                powerNeeded: 15,
                maxWorkers: 5,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
    },
    fertilizerDroneHub: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 25000,
            },
            {
                resourceName: 'steel',
                amount: 25000,
            },
            {
                resourceName: 'adamantine',
                amount: 1000,
            },
        ],
        requiredTech: ['droneFertilization'],
        buildingSound: 'Terraforming building placing',
        workingSound: 'Terraforming loop',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 2.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            logicOverride: 'terraformer',
            terraformType: 'fertilization',
            terraformRadius: 150,
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'fertilizer',
                        amount: 8,
                    },
                ],
                producables: [],
                timeSteps: 300000,
                powerNeeded: 20,
                maxWorkers: 10,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1,
        },
    },
    groundAcidityRegulator: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 50000,
            },
            {
                resourceName: 'steel',
                amount: 25000,
            },
            {
                resourceName: 'adamantine',
                amount: 2500,
            },
        ],
        requiredTech: ['groundAcidityRegulation'],
        buildingSound: 'Terraforming building placing',
        workingSound: 'Terraforming loop',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 10,
                    y: 4,
                    z: 10,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            logicOverride: 'terraformer',
            terraformType: 'groundAcidity',
            terraformRadius: 250,
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'advancedFilteringMesh',
                        amount: 1,
                    },
                ],
                producables: [],
                timeSteps: 600000,
                powerNeeded: 50,
                maxWorkers: 15,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 2,
        },
    },
    ammoniaExtractor: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 100000,
            },
            {
                resourceName: 'steel',
                amount: 150000,
            },
            {
                resourceName: 'adamantine',
                amount: 5000,
            },
        ],
        requiredTech: ['ammoniaExtraction'],
        buildingSound: 'Terraforming building placing',
        workingSound: 'Terraforming loop',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 20,
                    y: 2.5,
                    z: 12,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            logicOverride: 'terraformer',
            terraformType: 'ammoniaExtraction',
            terraformRadius: 400,
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'advancedFilteringMesh',
                        amount: 3,
                    },
                ],
                producables: [],
                timeSteps: 600000,
                powerNeeded: 450,
                maxWorkers: 35,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
    },
    magneticFieldGenerator_Stage0: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 350000,
            },
            {
                resourceName: 'steel',
                amount: 150000,
            },
            {
                resourceName: 'adamantine',
                amount: 25000,
            },
        ],
        requiredTech: ['magneticFieldGeneration'],
        //  "requiredTech": ["adamantineMining"],
        hasRoadConnection: false,
        localizationOverride: 'magneticFieldGenerator',
        buildingSound: 'Terraforming building placing',
        workingSound: 'Terraforming loop',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 3,
                    z: 0,
                },
                size: {
                    x: 26,
                    y: 8,
                    z: 26,
                },
            },
        ],
        productionLogic: {
            type: 'upgrade',
            costs: [
                {
                    resourceName: 'filteringMesh',
                    amount: 200,
                },
                {
                    resourceName: 'highTechTool',
                    amount: 150,
                },
            ],
            nextLevelBuilding: 'magneticFieldGenerator_Stage1',
        },
        //"sideRoadOffset": {"x": 0, "y": 0, "z":  4}
        netEdges: [
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 14,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: 12,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 0,
                    y: 0.2,
                    z: 14,
                },
                endPos: {
                    x: 0,
                    y: 0.2,
                    z: 12,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -14,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: -12,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
        ],
    },
    magneticFieldGenerator_Stage1: {
        localizationOverride: 'magneticFieldGenerator',
        hasRoadConnection: false,
        buildingSound: 'Terraforming building placing',
        workingSound: 'Terraforming loop',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 3,
                    z: 0,
                },
                size: {
                    x: 26,
                    y: 8,
                    z: 26,
                },
            },
        ],
        productionLogic: {
            type: 'upgrade',
            costs: [
                {
                    resourceName: 'concrete',
                    amount: 1500,
                },
                {
                    resourceName: 'steel',
                    amount: 1000,
                },
                {
                    resourceName: 'advancedFilteringMesh',
                    amount: 75,
                },
                {
                    resourceName: 'computer',
                    amount: 100,
                },
            ],
            nextLevelBuilding: 'magneticFieldGenerator_Stage2',
        },
        //"sideRoadOffset": {"x": 0, "y": 0, "z":  4}
        netEdges: [
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 14,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: 12,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 0,
                    y: 0.2,
                    z: 14,
                },
                endPos: {
                    x: 0,
                    y: 0.2,
                    z: 12,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -14,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: -12,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
        ],
    },
    magneticFieldGenerator_Stage2: {
        localizationOverride: 'magneticFieldGenerator',
        hasRoadConnection: false,
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 3,
                    z: 0,
                },
                size: {
                    x: 26,
                    y: 8,
                    z: 26,
                },
            },
        ],
        productionLogic: {
            type: 'upgrade',
            costs: [
                {
                    resourceName: 'concrete',
                    amount: 1500,
                },
                {
                    resourceName: 'steel',
                    amount: 500,
                },
                {
                    resourceName: 'superconductor',
                    amount: 125,
                },
                {
                    resourceName: 'radiationCore',
                    amount: 125,
                },
            ],
            nextLevelBuilding: 'magneticFieldGenerator_Stage3',
        },
        //"sideRoadOffset": {"x": 0, "y": 0, "z":  4}
        netEdges: [
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 14,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: 12,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 0,
                    y: 0.2,
                    z: 14,
                },
                endPos: {
                    x: 0,
                    y: 0.2,
                    z: 12,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -14,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: -12,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
        ],
    },
    magneticFieldGenerator_Stage3: {
        localizationOverride: 'magneticFieldGenerator',
        hasRoadConnection: false,
        buildingSound: 'Terraforming building placing',
        workingSound: 'Terraforming loop',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 3,
                    z: 0,
                },
                size: {
                    x: 26,
                    y: 8,
                    z: 26,
                },
            },
        ],
        productionLogic: {
            type: 'upgrade',
            costs: [
                {
                    resourceName: 'concrete',
                    amount: 1000,
                },
                {
                    resourceName: 'steel',
                    amount: 500,
                },
                {
                    resourceName: 'aiControlUnit',
                    amount: 150,
                },
                {
                    resourceName: 'superconductingCoil',
                    amount: 100,
                },
            ],
            nextLevelBuilding: 'magneticFieldGenerator_Stage4',
        },
        // "sideRoadOffset": {"x": 0, "y": 0, "z":  4}
        netEdges: [
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 14,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: 12,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 0,
                    y: 0.2,
                    z: 14,
                },
                endPos: {
                    x: 0,
                    y: 0.2,
                    z: 12,
                },
                trafficType: 'incoming',
            },
            {
                type: 'road', // incoming in the middle bottom right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: -14,
                    y: 0.2,
                    z: 0,
                },
                endPos: {
                    x: -12,
                    y: 0.2,
                    z: 0,
                },
                trafficType: 'incoming',
            },
        ],
    },
    magneticFieldGenerator_Stage4: {
        localizationOverride: 'magneticFieldGenerator',
        hasRoadConnection: false,
        buildingSound: 'Terraforming building placing',
        workingSound: 'Terraforming loop',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 3,
                    z: 0,
                },
                size: {
                    x: 26,
                    y: 8,
                    z: 26,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            logicOverride: 'terraformer',
            terraformRadius: 4096,
            terraformType: 'magneticField',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'superconductingCoil',
                        amount: 10,
                    },
                    {
                        resourceName: 'sciencePack4',
                        amount: 2,
                    },
                ],
                producables: [],
                timeSteps: 1500000,
                powerNeeded: 5000,
                maxWorkers: 200,
            },
        },
        //"sideRoadOffset": {"x": 0, "y": 0, "z":  4}
        netEdges: [
            {
                type: 'road', // outgoing in the middle top right
                name: 'road_superhighway_oneWay_threeLane',
                startPos: {
                    x: 0,
                    y: 0.2,
                    z: 14,
                },
                endPos: {
                    x: 0,
                    y: 0.2,
                    z: 2,
                },
                trafficType: 'incoming',
            },
        ],
    },
    crudeOilExtractor: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 1000,
            },
        ],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.5,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'crudeOil',
                        amount: 1,
                    },
                ],
                timeSteps: 25000,
                powerNeeded: 4,
                maxWorkers: 2,
                //"yieldResourceName":  "crudeOilCollider",
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1,
        },
        pipeResourceNames: ['crudeOil'],
    },
    largeCrudeOilExtractor: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
        ],
        requiredTech: ['largeMines'],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 5,
                    z: 8,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'crudeOil',
                        amount: 2,
                    },
                ],
                timeSteps: 25000,
                powerNeeded: 8,
                maxWorkers: 3,
                //"yieldResourceName":  "crudeOilCollider",
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1,
        },
        pipeResourceNames: ['crudeOil'],
    },
    chemicalsLab: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2000,
            },
            {
                resourceName: 'steel',
                amount: 500,
            },
        ],
        requiredTech: ['science2'],
        buildingSound: 'build science',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.5,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 2.5,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [],
                producables: [
                    {
                        resourceName: 'chemicals',
                        amount: 2,
                    },
                ],
                timeSteps: 50000,
                powerNeeded: 3,
                maxWorkers: 4,
                //"yieldResourceName":  "bloomingPlantCollider",
            },
        },
        sideRoadOffset: {
            x: -0.22,
            y: 0,
            z: 2.0,
        },
    },
    industrialChemicalsLab: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 4000,
            },
            {
                resourceName: 'steel',
                amount: 2500,
            },
        ],
        requiredTech: ['nanotubes'],
        buildingSound: 'build science',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 8,
                    y: 3,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'distilledWater',
                        amount: 2,
                    },
                    {
                        resourceName: 'chemicals',
                        amount: 4,
                    },
                    {
                        resourceName: 'methane',
                        amount: 2,
                    },
                ],
                producables: [
                    {
                        resourceName: 'industrialChemicals',
                        amount: 2,
                    },
                ],
                timeSteps: 100000,
                powerNeeded: 5,
                maxWorkers: 4,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
        pipeResourceNames: ['methane'],
    },
    stemCellLab: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 100,
            },
            {
                resourceName: 'steel',
                amount: 200,
            },
        ],
        requiredTech: ['foodProcessing'],
        buildingSound: 'build mine',
        workingSound: 'mineWorking',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.75,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 3.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'oxygen',
                        amount: 2,
                    },
                    {
                        resourceName: 'chemicals',
                        amount: 2,
                    },
                ],
                producables: [
                    {
                        resourceName: 'stemCell',
                        amount: 2,
                    },
                ],
                timeSteps: 100000,
                powerNeeded: 5,
                maxWorkers: 3,
                //"yieldResourceName":  "meatyPlantCollider",
            },
        },
        sideRoadOffset: {
            x: 0.45,
            y: 0,
            z: 0.75,
        },
        pipeResourceNames: ['oxygen'],
    },
    copperMill: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 1000,
            },
            {
                resourceName: 'steel',
                amount: 2000,
            },
        ],
        requiredTech: ['motors'],
        buildingSound: 'build production',
        workingSound: 'buildings_Concrete_Factory',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 3,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'copperOre',
                        amount: 2,
                    },
                    {
                        resourceName: 'chemicals',
                        amount: 2,
                    },
                ],
                producables: [
                    {
                        resourceName: 'copperBar',
                        amount: 2,
                    },
                ],
                timeSteps: 100000,
                powerNeeded: 8,
                maxWorkers: 6,
            },
        },
        sideRoadOffset: {
            x: -0.42,
            y: 0,
            z: 0.5,
        },
    },
    plasticFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2500,
            },
            {
                resourceName: 'steel',
                amount: 1500,
            },
        ],
        requiredTech: ['electronics'],
        buildingSound: 'build refinement',
        workingSound: 'buildings_Electronics_Factory',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 3.5,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'crudeOil',
                        amount: 2,
                    },
                ],
                producables: [
                    {
                        resourceName: 'plastic',
                        amount: 2,
                    },
                ],
                timeSteps: 75000,
                powerNeeded: 2,
                maxWorkers: 4,
            },
        },
        sideRoadOffset: {
            x: 0.65,
            y: 0,
            z: 0.25,
        },
        pipeResourceNames: ['crudeOil'],
    },
    sensorFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 7500,
            },
            {
                resourceName: 'steel',
                amount: 5000,
            },
        ],
        requiredTech: ['neuralProcessors'],
        buildingSound: 'build refinement',
        workingSound: 'buildings_Electronics_Factory',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.5,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 3,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'plastic',
                        amount: 4,
                    },
                    {
                        resourceName: 'aluminium',
                        amount: 4,
                    },
                ],
                producables: [
                    {
                        resourceName: 'sensor',
                        amount: 6,
                    },
                ],
                timeSteps: 150000,
                powerNeeded: 10,
                maxWorkers: 10,
            },
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.25,
        },
    },
    heatExchangerFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 15000,
            },
            {
                resourceName: 'steel',
                amount: 7500,
            },
        ],
        requiredTech: ['heatExchanger'],
        buildingSound: 'build refinement',
        workingSound: 'buildings_Electronics_Factory',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.5,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 3,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'copperBar',
                        amount: 2,
                    },
                    {
                        resourceName: 'steel',
                        amount: 5,
                    },
                    {
                        resourceName: 'industrialChemicals',
                        amount: 2,
                    },
                    {
                        resourceName: 'crudeOil',
                        amount: 4,
                    },
                ],
                producables: [
                    {
                        resourceName: 'heatExchanger',
                        amount: 4,
                    },
                ],
                timeSteps: 200000,
                powerNeeded: 5,
                maxWorkers: 5,
            },
        },
        sideRoadOffset: {
            x: -1.5,
            y: 0,
            z: 1,
        },
        pipeResourceNames: ['crudeOil'],
    },
    enrichedUraniumFactory: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 20000,
            },
            {
                resourceName: 'steel',
                amount: 15000,
            },
        ],
        requiredTech: ['uraniumMining'],
        buildingSound: 'Methane placing',
        workingSound: 'Methane LOOP',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 8,
                    y: 4,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'factory',
            productionDefinition: {
                consumables: [
                    {
                        resourceName: 'uranium',
                        amount: 4,
                    },
                    {
                        resourceName: 'chemicals',
                        amount: 8,
                    },
                ],
                producables: [
                    {
                        resourceName: 'enrichedUranium',
                        amount: 5,
                    },
                ],
                timeSteps: 300000,
                powerNeeded: 25,
                maxWorkers: 5,
            },
        },
        sideRoadOffset: {
            x: 1,
            y: 0,
            z: 0.25,
        },
    },
    pixelBuildingCorner: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 500,
            },
            {
                resourceName: 'steel',
                amount: 500,
            },
        ],
        requiredTech: ['pixelBuilding'],
        buildingSound: 'build habitat',
        shrinkColliders: false,
        colliders: [
            {
                type: 'box',
                center: {
                    x: -0.34,
                    y: 0.6,
                    z: -0.66,
                },
                size: {
                    x: 1.26,
                    y: 1.24,
                    z: 0.63,
                },
            },
            {
                type: 'box',
                center: {
                    x: -0.66,
                    y: 0.6,
                    z: -0.34,
                },
                size: {
                    x: 0.63,
                    y: 1.24,
                    z: 1.26,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0.5,
                    y: 0.6,
                    z: -0.83,
                },
                size: {
                    x: 0.35,
                    y: 1.24,
                    z: 0.3,
                },
            },
            {
                type: 'box',
                center: {
                    x: -0.83,
                    y: 0.6,
                    z: 0.5,
                },
                size: {
                    x: 0.3,
                    y: 1.24,
                    z: 0.35,
                },
            },
            {
                type: 'box',
                center: {
                    x: -0.16,
                    y: 0.6,
                    z: -0.16,
                },
                size: {
                    x: 0.3,
                    y: 1.24,
                    z: 0.3,
                },
            },
        ],
        hasRoadConnection: false,
        productionLogic: {
            type: 'pixel',
        },
    },
    pixelBuildingInvertCorner: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 500,
            },
            {
                resourceName: 'steel',
                amount: 500,
            },
        ],
        requiredTech: ['pixelBuilding'],
        buildingSound: 'build habitat',
        shrinkColliders: false,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0.92,
                    y: 0.6,
                    z: -0.36,
                },
                size: {
                    x: 0.15,
                    y: 1,
                    z: 1.14,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0.36,
                    y: 0.6,
                    z: -0.92,
                },
                size: {
                    x: 1.14,
                    y: 1,
                    z: 0.15,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0.8,
                    y: 0.6,
                    z: -0.55,
                },
                size: {
                    x: 0.25,
                    y: 1,
                    z: 0.83,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0.51,
                    y: 0.6,
                    z: -0.79,
                },
                size: {
                    x: 0.81,
                    y: 1,
                    z: 0.17,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0.6,
                    y: 0.6,
                    z: -0.58,
                },
                size: {
                    x: 0.3,
                    y: 1,
                    z: 0.3,
                },
            },
        ],
        hasRoadConnection: false,
        productionLogic: {
            type: 'pixel',
        },
    },
    pixelBuildingRound: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 500,
            },
            {
                resourceName: 'steel',
                amount: 500,
            },
        ],
        requiredTech: ['pixelBuilding'],
        buildingSound: 'build habitat',
        shrinkColliders: false,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.6,
                    z: 0,
                },
                size: {
                    x: 1.5,
                    y: 0.88,
                    z: 1.5,
                },
            },
        ],
        hasRoadConnection: false,
        productionLogic: {
            type: 'pixel',
        },
    },
    pixelBuildingRoundCorner: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 500,
            },
            {
                resourceName: 'steel',
                amount: 500,
            },
        ],
        requiredTech: ['pixelBuilding'],
        buildingSound: 'build habitat',
        shrinkColliders: false,
        colliders: [
            {
                type: 'box',
                center: {
                    x: -0.31,
                    y: 0.6,
                    z: 0.31,
                },
                size: {
                    x: 1.37,
                    y: 1,
                    z: 1.29,
                },
            },
            {
                type: 'box',
                center: {
                    x: -0.5,
                    y: 0.6,
                    z: -0.45,
                },
                size: {
                    x: 0.97,
                    y: 1,
                    z: 0.54,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0.42,
                    y: 0.6,
                    z: 0.45,
                },
                size: {
                    x: 0.5,
                    y: 1,
                    z: 1,
                },
            },
        ],
        hasRoadConnection: false,
        productionLogic: {
            type: 'pixel',
        },
    },
    pixelBuildingSquare: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 500,
            },
            {
                resourceName: 'steel',
                amount: 500,
            },
        ],
        requiredTech: ['pixelBuilding'],
        buildingSound: 'build habitat',
        shrinkColliders: false,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.6,
                    z: 0,
                },
                size: {
                    x: 1.8,
                    y: 0.88,
                    z: 1.8,
                },
            },
        ],
        hasRoadConnection: false,
        productionLogic: {
            type: 'pixel',
        },
    },
    crashedUfo: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 25000,
            },
            {
                resourceName: 'steel',
                amount: 25000,
            },
        ],
        requiredTech: ['sightSeeing2'],
        buildingSound: 'build habitat',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2,
                    z: 0,
                },
                size: {
                    x: 18,
                    y: 6,
                    z: 18,
                },
            },
        ],
        hasRoadConnection: false,
    },
    decorativePark1: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 7500,
            },
            {
                resourceName: 'steel',
                amount: 3500,
            },
        ],
        requiredTech: ['parks'],
        buildingSound: 'build habitat',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.5,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 4,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'areaOfEffect',
            upgradeName: 'fulfillNeed',
            resourceName: 'parkPoints',
            radius: 20,
            powerNeeded: 3,
            maxWorkers: 3,
        },
        hasRoadConnection: true,
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 2.5,
        },
    },
    decorativePark2: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 7500,
            },
            {
                resourceName: 'steel',
                amount: 3500,
            },
        ],
        requiredTech: ['parks'],
        buildingSound: 'build habitat',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1.5,
                    z: 0,
                },
                size: {
                    x: 6,
                    y: 4,
                    z: 6,
                },
            },
        ],
        productionLogic: {
            type: 'areaOfEffect',
            upgradeName: 'fulfillNeed',
            resourceName: 'parkPoints',
            radius: 20,
            powerNeeded: 3,
            maxWorkers: 3,
        },
        hasRoadConnection: true,
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 2.5,
        },
    },
    fence1: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 1000,
            },
        ],
        requiredTech: ['fence'],
        buildingSound: 'build habitat',
        shrinkColliders: false,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0.8,
                    y: 0.5,
                    z: 0,
                },
                size: {
                    x: 0.25,
                    y: 1.2,
                    z: 1.95,
                },
            },
        ],
        hasRoadConnection: false,
    },
    fence2: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 1000,
            },
        ],
        requiredTech: ['fence'],
        buildingSound: 'build habitat',
        shrinkColliders: false,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0.88,
                    y: 0.77,
                    z: 0,
                },
                size: {
                    x: 0.15,
                    y: 0.55,
                    z: 1.6,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0.88,
                    y: 0.4,
                    z: 0.83,
                },
                size: {
                    x: 0.2,
                    y: 1.12,
                    z: 0.3,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0.88,
                    y: 0.4,
                    z: -0.83,
                },
                size: {
                    x: 0.2,
                    y: 1.12,
                    z: 0.3,
                },
            },
        ],
        hasRoadConnection: false,
    },
    fence3: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 1000,
            },
        ],
        requiredTech: ['fence'],
        buildingSound: 'build habitat',
        shrinkColliders: false,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0.84,
                    y: 0.5,
                    z: 0,
                },
                size: {
                    x: 0.25,
                    y: 1.2,
                    z: 1.95,
                },
            },
        ],
        hasRoadConnection: false,
    },
    panoramicWheel: {
        costs: [
            {
                resourceName: 'steel',
                amount: 50000,
            },
        ],
        requiredTech: ['sightSeeing1'],
        buildingSound: 'build habitat',
        shrinkColliders: true,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 6.4,
                    z: 0,
                },
                size: {
                    x: 14,
                    y: 15,
                    z: 8,
                },
            },
        ],
        hasRoadConnection: false,
    },
    parkingLot1: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 15000,
            },
        ],
        requiredTech: ['sightSeeing1'],
        buildingSound: 'build habitat',
        shrinkColliders: true,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 2,
                    y: 0,
                    z: 0,
                },
                size: {
                    x: 12,
                    y: 3.5,
                    z: 14,
                },
            },
            {
                type: 'box',
                center: {
                    x: -6,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 2,
                    z: 22,
                },
            },
        ],
        hasRoadConnection: false,
    },
    eiffelTower: {
        costs: [
            {
                resourceName: 'steel',
                amount: 50000,
            },
        ],
        requiredTech: ['sightSeeing1'],
        buildingSound: 'build habitat',
        shrinkColliders: true,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2,
                    z: 0,
                },
                size: {
                    x: 10,
                    y: 5.5,
                    z: 10,
                },
            },
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 9,
                    z: 0,
                },
                size: {
                    x: 4.5,
                    y: 10,
                    z: 4.5,
                },
            },
        ],
        hasRoadConnection: false,
    },
    statue1: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 10000,
            },
            {
                resourceName: 'steel',
                amount: 10000,
            },
        ],
        requiredTech: ['statue'],
        buildingSound: 'build habitat',
        shrinkColliders: true,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 5.5,
                    z: 4,
                },
            },
        ],
        hasRoadConnection: false,
    },
    statue2: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 10000,
            },
            {
                resourceName: 'steel',
                amount: 10000,
            },
        ],
        requiredTech: ['statue'],
        buildingSound: 'build habitat',
        shrinkColliders: true,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2.5,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 6.5,
                    z: 4,
                },
            },
        ],
        hasRoadConnection: false,
    },
    statue3: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 10000,
            },
            {
                resourceName: 'steel',
                amount: 10000,
            },
        ],
        requiredTech: ['statue'],
        buildingSound: 'build habitat',
        shrinkColliders: true,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 5.5,
                    z: 4,
                },
            },
        ],
        hasRoadConnection: false,
    },
    ffEasterEgg: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
            {
                resourceName: 'steel',
                amount: 5000,
            },
        ],
        requiredTech: ['statue'],
        buildingSound: 'build habitat',
        shrinkColliders: true,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 4,
                    z: 4,
                },
            },
        ],
        hasRoadConnection: false,
    },
    decorativePark3: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
            {
                resourceName: 'steel',
                amount: 5000,
            },
        ],
        requiredTech: ['parks'],
        buildingSound: 'build habitat',
        shrinkColliders: true,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 3,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'areaOfEffect',
            upgradeName: 'fulfillNeed',
            resourceName: 'parkPoints',
            radius: 14,
            powerNeeded: 2,
            maxWorkers: 2,
        },
        hasRoadConnection: true,
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.5,
        },
    },
    decorativePark4: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 5000,
            },
            {
                resourceName: 'steel',
                amount: 5000,
            },
        ],
        requiredTech: ['parks'],
        buildingSound: 'build habitat',
        shrinkColliders: true,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                size: {
                    x: 4,
                    y: 3,
                    z: 4,
                },
            },
        ],
        productionLogic: {
            type: 'areaOfEffect',
            upgradeName: 'fulfillNeed',
            resourceName: 'parkPoints',
            radius: 14,
            powerNeeded: 2,
            maxWorkers: 2,
        },
        hasRoadConnection: true,
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 1.5,
        },
    },
    decorativePark5: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 2500,
            },
            {
                resourceName: 'steel',
                amount: 2500,
            },
        ],
        requiredTech: ['parks'],
        buildingSound: 'build habitat',
        shrinkColliders: true,
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 0.5,
                    z: 0,
                },
                size: {
                    x: 2,
                    y: 2,
                    z: 2,
                },
            },
        ],
        productionLogic: {
            type: 'areaOfEffect',
            upgradeName: 'fulfillNeed',
            resourceName: 'parkPoints',
            radius: 8,
            powerNeeded: 1,
            maxWorkers: 1,
        },
        hasRoadConnection: true,
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 0.5,
        },
    },
    pyramid: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 25000,
            },
            {
                resourceName: 'steel',
                amount: 25000,
            },
        ],
        requiredTech: ['sightSeeing2'],
        buildingSound: 'build habitat',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 3,
                    z: 0,
                },
                size: {
                    x: 12,
                    y: 7,
                    z: 12,
                },
            },
        ],
        hasRoadConnection: false,
    },
    holoCinema: {
        costs: [
            {
                resourceName: 'concrete',
                amount: 25000,
            },
            {
                resourceName: 'steel',
                amount: 25000,
            },
        ],
        requiredTech: ['culture'],
        buildingSound: 'build habitat',
        colliders: [
            {
                type: 'box',
                center: {
                    x: 0,
                    y: 2,
                    z: 0,
                },
                size: {
                    x: 16,
                    y: 6,
                    z: 16,
                },
            },
        ],
        productionLogic: {
            type: 'areaOfEffect',
            upgradeName: 'fulfillNeed',
            resourceName: 'culturePoints',
            radius: 50,
            powerNeeded: 30,
            maxWorkers: 10,
        },
        sideRoadOffset: {
            x: 0,
            y: 0,
            z: 5,
        },
    },
};
