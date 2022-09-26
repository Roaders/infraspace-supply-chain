import { Component, Input } from '@angular/core';

import { IFactory, Material } from '../../contracts';
import { getFactories, getRate } from '../../helpers';

@Component({
    selector: 'material-production',
    templateUrl: './material-production.component.html',
})
export class MaterialProductionComponent {
    private _material: Material | undefined;

    @Input()
    public get material(): Material | undefined {
        return this._material;
    }

    public set material(value: Material | undefined) {
        this.reset();
        this._material = value;

        this.updateFactories();
    }

    private _productionRate = '0';

    public get productionRate(): string {
        return this._productionRate;
    }

    private _factoryCount = 1;

    public get factoryCount(): number {
        return this._factoryCount;
    }

    private set factoryCount(value: number) {
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

    public getComponentRate(component: Material): string {
        if (this._selectedFactory == null) {
            return '0';
        }

        return getRate(this._selectedFactory, component, this._factoryCount, 'input').toFixed(1);
    }

    public selectFactory(factory: IFactory): void {
        this._selectedFactory = factory;
        this._factoryCount = 1;

        this.updateProductionRate();
    }

    public updateFactoryCount(value: Event) {
        const targetValue = (value.target as HTMLInputElement).value;
        this._factoryCount = parseInt(targetValue);

        this.updateProductionRate();
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
        if (this._material == null || this._selectedFactory == null) {
            this._productionRate = '0';
            return;
        }

        this._productionRate = getRate(this._selectedFactory, this._material, this._factoryCount).toFixed(1);
    }

    private reset() {
        this._selectedFactory = undefined;
        this._materialFactories = [];
        this._material = undefined;
        this._factoryCount = 1;
    }
}
