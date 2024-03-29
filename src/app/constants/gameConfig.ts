export const gameConfig = {
    camera: {
        $type: 'CameraConfig, DionicGame',
        cameraSpeedKeyboard: 5.0,
        cameraRotationXLowerLimit: -70.0,
        cameraRotationXUpperLimit: 100.0,
        cameraZoomMinimum: 0.05,
        cameraZoomMaximum: 16.0,
    },

    habitat: {
        $type: 'HabitatConfig, Old',
        requiredResources: [
            [
                // HABITAT LEVEL 0,
            ],
            [
                // HABITAT LEVEL 1
                { resourceName: 'oxygen', consumptionFactor: 0.5 },
            ],
            [
                // HABITAT LEVEL 2
                { resourceName: 'oxygen', consumptionFactor: 0.625 },
                { resourceName: 'water', consumptionFactor: 0.625 },
                { resourceName: 'survivalFood', consumptionFactor: 0.625 },
            ],
            [
                // HABITAT LEVEL 3
                { resourceName: 'oxygen', consumptionFactor: 0.625 },
                { resourceName: 'water', consumptionFactor: 0.625 },
                { resourceName: 'survivalFood', consumptionFactor: 0.625 },
                { resourceName: 'homeAppliance', consumptionFactor: 0.47 },
            ],
            [
                // HABITAT LEVEL 4
                { resourceName: 'oxygen', consumptionFactor: 0.625 },
                { resourceName: 'water', consumptionFactor: 0.625 },
                { resourceName: 'survivalFood', consumptionFactor: 0.625 },
                { resourceName: 'homeAppliance', consumptionFactor: 0.415 },
                { resourceName: 'computer', consumptionFactor: 0.21 },
                { resourceName: 'parkPoints', consumptionFactor: 0 },
            ],
            [
                // HABITAT LEVEL 5
                { resourceName: 'oxygen', consumptionFactor: 0.55 },
                { resourceName: 'water', consumptionFactor: 0.55 },
                { resourceName: 'survivalFood', consumptionFactor: 0.14 },
                { resourceName: 'goodFood', consumptionFactor: 0.28 },
                { resourceName: 'homeAppliance', consumptionFactor: 0.42 },
                { resourceName: 'computer', consumptionFactor: 0.28 },
                { resourceName: 'parkPoints', consumptionFactor: 0 },
                { resourceName: 'homeRobot', consumptionFactor: 0.14 },
                { resourceName: 'culturePoints', consumptionFactor: 0 },
            ],
            [
                // HABITAT LEVEL 6
                { resourceName: 'oxygen', consumptionFactor: 0.48 },
                { resourceName: 'water', consumptionFactor: 0.48 },
                { resourceName: 'survivalFood', consumptionFactor: 0.1 },
                { resourceName: 'goodFood', consumptionFactor: 0.38 },
                { resourceName: 'homeAppliance', consumptionFactor: 0.29 },
                { resourceName: 'computer', consumptionFactor: 0.2 },
                { resourceName: 'parkPoints', consumptionFactor: 0 },
                { resourceName: 'homeRobot', consumptionFactor: 0.2 },
                { resourceName: 'culturePoints', consumptionFactor: 0 },
                { resourceName: 'vrEdutainment', consumptionFactor: 0.1 },
                { resourceName: 'schoolPoints', consumptionFactor: 0 },
            ],
        ],
    },
};
