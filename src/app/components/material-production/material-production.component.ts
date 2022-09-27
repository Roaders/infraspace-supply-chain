import { Component, Input } from '@angular/core';

import { Material } from '../../contracts';
import { MaterialProductionModel } from './material-production.model';

@Component({
    selector: 'material-production',
    templateUrl: './material-production.component.html',
    styleUrls: ['./material-production.component.scss'],
})
export class MaterialProductionComponent {
    private _visibilityLookup: Partial<Record<Material, boolean>> = {};

    private _model!: MaterialProductionModel;

    @Input()
    public get model(): MaterialProductionModel {
        return this._model;
    }

    public set model(value: MaterialProductionModel) {
        this.reset();
        this._model = value;
    }

    @Input()
    public get requiredRate(): number {
        return this.model.requiredRate;
    }

    public set requiredRate(value: number) {
        this.model.requiredRate = value;
    }

    public updateFactoryCount(value: Event) {
        const targetValue = (value.target as HTMLInputElement).value;
        this.model.factoryCount = parseInt(targetValue);
    }

    public getVisibility(component: Material): boolean {
        return this._visibilityLookup[component] ?? true;
    }

    public toggleVisibility(component: Material): void {
        this._visibilityLookup[component] = !this.getVisibility(component);
    }

    private reset() {
        this._visibilityLookup = {};
    }
}
