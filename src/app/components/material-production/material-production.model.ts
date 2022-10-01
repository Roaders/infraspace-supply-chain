import { Injectable } from '@morgan-stanley/needle';

import { FactoryTotals, IFactory, Material } from '../../contracts';
import { getFactories, getRate } from '../../helpers';

@Injectable()
export class MaterialProductionModelFactory {
    public create<T extends Material>(material: T, depth = 0): MaterialProductionModel<T> {
        return new MaterialProductionModel<T>(material, this, depth);
    }
}

export class MaterialProductionModel<T extends Material = Material> {
    constructor(
        public readonly material: T,
        private childFactory: MaterialProductionModelFactory,
        public readonly depth = 0
    ) {
        this._materialFactories = getFactories(material);
        this._selectedFactory = this._materialFactories[0];

        this.updateChildren();
        this.updateProductionRate();
    }

    private _requiredRate: number | undefined;

    public get requiredRate(): number | undefined {
        return this._requiredRate;
    }

    public set requiredRate(value: number | undefined) {
        if (this._requiredRate === value) {
            return;
        }
        this._requiredRate = value;

        this.updateRequiredFactoryCount();
    }

    private _productionRate = 0;

    public get productionRate(): number {
        return this._productionRate;
    }

    private _factoryCount = 1;

    public get factoryCount(): number {
        return this._factoryCount;
    }

    public set factoryCount(value: number) {
        if (this._factoryCount === value) {
            return;
        }
        this._factoryCount = value;

        this.updateProductionRate();
    }

    private _materialFactories: IFactory<T>[] = [];

    public get materialFactories(): IFactory<T>[] {
        return this._materialFactories;
    }

    private _selectedFactory: IFactory<T>;

    public get selectedFactory(): IFactory<T> {
        return this._selectedFactory;
    }

    public set selectedFactory(value: IFactory<T>) {
        this._selectedFactory = value;
        this._factoryCount = 1;

        this.updateChildren();
        this.updateRequiredFactoryCount();
    }

    public hierarchicalFactorySelection(factory: IFactory) {
        if (this.materialFactories.includes(factory)) {
            this.selectedFactory = factory;
        }

        this._children.forEach((child) => child.hierarchicalFactorySelection(factory));
    }

    private _children: MaterialProductionModel[] = [];

    public get children(): MaterialProductionModel[] {
        return this._children;
    }

    public getRequiredComponentRate(component: Material): number {
        return getRate(
            this._selectedFactory.input?.[component] ?? 0,
            this._selectedFactory.duration,
            this._factoryCount
        );
    }

    public getTotals(): FactoryTotals {
        const totals = new Map<IFactory, Partial<Record<Material, number>>>();

        this.children.forEach((child) => {
            this.addTotal(totals, child.selectedFactory, child.material, this.getRequiredComponentRate(child.material));

            this.addChildTotals(totals, child);
        });

        return totals;
    }

    private addChildTotals(totals: FactoryTotals, child: MaterialProductionModel) {
        const childTotals = child.getTotals();

        Array.from(childTotals.keys()).forEach((childFactory) => {
            const childFactoryTotals = childTotals.get(childFactory) ?? {};

            const childTotalMaterials = Object.keys(childFactoryTotals) as Material[];

            childTotalMaterials.forEach((childMaterial) =>
                this.addTotal(totals, childFactory, childMaterial, childFactoryTotals[childMaterial] ?? 0)
            );
        });
    }

    private addTotal(totals: FactoryTotals, factory: IFactory, material: Material, rate: number) {
        let factoryTotals = totals.get(factory);

        if (factoryTotals == null) {
            factoryTotals = {};
            totals.set(factory, factoryTotals);
        }

        const existingRate = factoryTotals[material] ?? 0;

        factoryTotals[material] = existingRate + rate;
    }

    private updateProductionRate() {
        this._productionRate = this.calculateRate(this._factoryCount);

        this.children.forEach((child) => (child.requiredRate = this.getRequiredComponentRate(child.material)));
    }

    private updateRequiredFactoryCount() {
        if (this._requiredRate != null) {
            const ratePerSingleFactory = this.calculateRate(1);

            this._factoryCount = Math.ceil(this._requiredRate / ratePerSingleFactory);
        }

        this.updateProductionRate();
    }

    private calculateRate(factoryCount: number) {
        return getRate(this._selectedFactory.output[this.material] ?? 0, this._selectedFactory.duration, factoryCount);
    }

    private updateChildren() {
        const input = this._selectedFactory.input ?? {};

        this._children = Object.keys(input).map((component) =>
            this.childFactory.create(component as Material, this.depth + 1)
        );
    }
}
