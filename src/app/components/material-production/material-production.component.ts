import { Component, Input } from '@angular/core';

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

    public get headerClasses(): string[] {
        const classes = [this.backgroundClass];
        if (!this.visible) {
            classes.push('rounded-bottom');
        }

        return classes;
    }

    public get backgroundClass(): string {
        switch (this.model.depth) {
            case 0:
                return 'banner-one';
            case 1:
                return 'banner-two';
            case 2:
                return 'banner-three';
            case 3:
                return 'banner-four';
            case 4:
                return 'banner-five';

            default:
                return 'banner-six';
        }
    }

    public get materialRate(): string {
        switch (this.model.material) {
            default:
                return '/min';
        }
    }

    private reset() {
        this._visible = true;
    }
}
