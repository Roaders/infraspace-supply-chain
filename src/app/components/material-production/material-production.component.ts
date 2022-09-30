import { Component, Input } from '@angular/core';

import { Material } from '../../contracts';
import { MaterialProductionModel } from './material-production.model';

@Component({
    selector: 'material-production',
    templateUrl: './material-production.component.html',
})
export class MaterialProductionComponent {
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
    public get requiredRate(): number | undefined {
        return this.model.requiredRate;
    }

    public set requiredRate(value: number | undefined) {
        this.model.requiredRate = value;
    }

    public updateFactoryCount(value: Event) {
        const targetValue = (value.target as HTMLInputElement).value;
        this.model.factoryCount = parseInt(targetValue);
    }

    private _visible = true;

    public get visible(): boolean {
        return this._visible;
    }

    public toggleVisibility(): void {
        this._visible = !this._visible;
    }

    private reset() {
        this._visible = true;
    }
}
