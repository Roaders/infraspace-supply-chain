import { Component, Input } from '@angular/core';

import { FactoryTotals, IFactory, Material } from '../../contracts';
import { getRate } from '../../helpers';

type BuildCosts = Partial<Record<Material, number>>;

@Component({
    selector: 'totals-display',
    templateUrl: './totals-display.component.html',
    styleUrls: ['./totals-display.component.scss'],
})
export class TotalsDisplayComponent {
    private _factoriesMap: Map<IFactory, number> = new Map();
    private _buildCosts: BuildCosts = {};
    private _totalWorkers = 0;
    private _totalPower = 0;

    private _count = 0;

    @Input()
    public get count(): number {
        return this._count;
    }

    public set count(value: number) {
        this._count = value;

        this.generateFactories();
    }

    @Input()
    public factory: IFactory | undefined;

    private _totals: FactoryTotals | undefined;

    @Input()
    public get totals(): FactoryTotals | undefined {
        return this._totals;
    }

    public set totals(value: FactoryTotals | undefined) {
        this._totals = value;

        this.generateFactories();
    }

    public get factories(): IFactory[] {
        return Array.from(this._factoriesMap.keys()).sort((one, two) => one.name.localeCompare(two.name));
    }

    public getFactoryCount(factory: IFactory) {
        return this._factoriesMap.get(factory);
    }

    public get buildMaterials(): Material[] {
        return Object.keys(this._buildCosts) as Material[];
    }

    public getBuildMaterialCost(meterial: Material): number {
        return this._buildCosts[meterial] ?? 0;
    }

    public get totalPower(): number {
        return this._totalPower;
    }

    public get totalWorkers(): number {
        return this._totalWorkers;
    }

    private _visible = true;

    public toggleVisibility() {
        this._visible = !this._visible;
    }

    public get visible(): boolean {
        return this._visible;
    }

    private generateFactories() {
        this._factoriesMap = new Map();
        if (this.totals == null) {
            return;
        }

        Array.from(this.totals?.keys()).forEach((factory) => {
            const factoryRates = this.totals?.get(factory) ?? {};
            const factoryOutputMaterials = Object.keys(factoryRates) as Material[];
            const factoryCount = factoryOutputMaterials.reduce(
                (count, outputMaterial) =>
                    Math.max(
                        count,
                        getRequiredFactoryCount(factory, outputMaterial, factoryRates[outputMaterial] ?? 0)
                    ),
                0
            );

            this._factoriesMap.set(factory, factoryCount);
        });

        if (this.factory != null) {
            this._factoriesMap.set(this.factory, this.count);
        }

        this.updateBuildCosts();
    }

    private updateBuildCosts() {
        this._totalPower = 0;
        this._totalWorkers = 0;

        this._buildCosts = Array.from(this._factoriesMap.entries()).reduce<BuildCosts>((costs, [factory, count]) => {
            this._totalPower += factory.power * count;
            this._totalWorkers += factory.workers * count;

            return addBuildCosts(costs, factory, count);
        }, {});
    }
}

function addBuildCosts(costs: BuildCosts, factory: IFactory, count: number): BuildCosts {
    const factoryCosts = Object.entries(factory.buildCost).reduce<BuildCosts>(
        (factoryCosts, [material, materialCount]) => ({
            ...factoryCosts,
            [material]: materialCount * count + (costs[material as Material] ?? 0),
        }),
        {}
    );

    return { ...costs, ...factoryCosts };
}

function getRequiredFactoryCount(factory: IFactory, material: Material, requiredRate: number) {
    const productionRate = getRate(material, factory.output[material] ?? 0, factory.duration, 1);

    return Math.ceil(requiredRate / productionRate);
}
