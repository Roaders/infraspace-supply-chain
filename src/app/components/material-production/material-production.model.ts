import { Injectable } from '@morgan-stanley/needle';

import { IFactory, Material } from '../../contracts';
import { getFactories, getRate } from '../../helpers';

@Injectable()
export class MaterialProductionModelFactory {
    public create<T extends Material>(material: T): MaterialProductionModel<T> {
        return new MaterialProductionModel<T>(material, this);
    }
}

export class MaterialProductionModel<T extends Material = Material> {
    constructor(public readonly material: T, factory: MaterialProductionModelFactory) {
        this._materialFactories = getFactories(material);
        this._selectedFactory = this._materialFactories[0];

        this.updateProductionRate();

        const input = this._selectedFactory.input ?? {};

        this._children = Object.keys(input).map((component) => factory.create(component as Material));
    }

    private _requiredRate = 0;

    public get requiredRate(): number {
        return this._requiredRate;
    }

    public set requiredRate(value: number) {
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

        this.updateRequiredFactoryCount();
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

    private updateProductionRate() {
        this._productionRate = this.calculateRate(this._factoryCount);

        this.children.forEach((child) => (child.requiredRate = this.getRequiredComponentRate(child.material)));
    }

    private updateRequiredFactoryCount() {
        if (this._requiredRate !== 0) {
            const ratePerSingleFactory = this.calculateRate(1);

            this._factoryCount = Math.ceil(this._requiredRate / ratePerSingleFactory);
        }

        this.updateProductionRate();
    }

    private calculateRate(factoryCount: number) {
        return getRate(this._selectedFactory.output[this.material] ?? 0, this._selectedFactory.duration, factoryCount);
    }
}
