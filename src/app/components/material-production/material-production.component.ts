import { Component, Input } from '@angular/core';

import { IFactory, Material } from '../../contracts';
import { getFactories, getRate } from '../../helpers';

@Component({
    selector: 'material-production',
    templateUrl: './material-production.component.html',
    styleUrls: ['./material-production.component.scss'],
})
export class MaterialProductionComponent {
    private _visibilityLookup: Partial<Record<Material, boolean>> = {};

    private _material: Material | undefined;

    @Input()
    public get material(): Material | undefined {
        return this._material;
    }

    public set material(value: Material | undefined) {
        if (this._material === value) {
            return;
        }
        this.reset();
        this._material = value;

        this.updateFactories();
    }

    private _requiredRate = 0;

    @Input()
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

    private set factoryCount(value: number) {
        if (this._factoryCount === value) {
            return;
        }
        this._factoryCount = value;

        this.updateProductionRate();
    }

    private _materialFactories: IFactory[] = [];

    public get materialFactories(): IFactory[] {
        return this._materialFactories;
    }

    private _selectedFactory: IFactory | undefined;

    public get selectedFactory(): IFactory | undefined {
        return this._selectedFactory;
    }

    public get components(): Material[] {
        const input = this._selectedFactory?.input || {};

        return Object.keys(input) as Material[];
    }

    public getComponentRate(component: Material): number {
        if (this._selectedFactory == null) {
            return 0;
        }

        return getRate(this._selectedFactory, component, this._factoryCount, 'input');
    }

    public selectFactory(factory: IFactory): void {
        this._selectedFactory = factory;
        this._factoryCount = 1;

        this.updateRequiredFactoryCount();
    }

    public updateFactoryCount(value: Event) {
        const targetValue = (value.target as HTMLInputElement).value;
        this._factoryCount = parseInt(targetValue);

        this.updateProductionRate();
    }

    public getVisibility(component: Material): boolean {
        return this._visibilityLookup[component] ?? true;
    }

    public toggleVisibility(component: Material): void {
        this._visibilityLookup[component] = !this.getVisibility(component);
    }

    private updateFactories(): void {
        if (this._material == null) {
            this.reset();
            return;
        }

        this._materialFactories = getFactories(this._material);
        this._selectedFactory = this._materialFactories[0];

        this.updateProductionRate();
    }

    private updateProductionRate() {
        this._productionRate = this.calculateRate(this._factoryCount);
    }

    private updateRequiredFactoryCount() {
        if (this._requiredRate !== 0) {
            const ratePerSingleFactory = this.calculateRate(1);

            this._factoryCount = Math.ceil(this._requiredRate / ratePerSingleFactory);
        }

        this.updateProductionRate();
    }

    private calculateRate(factoryCount: number) {
        if (this._material == null || this._selectedFactory == null) {
            return 0;
        }

        return getRate(this._selectedFactory, this._material, factoryCount);
    }

    private reset() {
        this._selectedFactory = undefined;
        this._materialFactories = [];
        this._material = undefined;
        this._factoryCount = 1;
        this._visibilityLookup = {};
    }
}
