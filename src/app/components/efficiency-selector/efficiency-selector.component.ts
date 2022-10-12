import { Component, Input } from '@angular/core';

import { IFactory } from '../../contracts';
import { EfficiencyHelper } from '../../helpers';
import { MaterialProductionModel } from '../material-production/material-production.model';

@Component({
    selector: 'efficiency-selector',
    templateUrl: './efficiency-selector.component.html',
    styleUrls: ['./efficiency-selector.component.scss'],
})
export class EfficiencySelectorComponent {
    constructor(public readonly helper: EfficiencyHelper) {}

    @Input()
    public productionModel: MaterialProductionModel | undefined;

    public get factories(): IFactory<any>[] {
        if (this.productionModel == null) {
            return [];
        }

        return [...Array.from(this.productionModel?.getTotals().keys()), this.productionModel.selectedFactory].sort(
            (a, b) => a.name.localeCompare(b.name)
        );
    }

    public get filteredFactories(): IFactory<any>[] {
        return this.factories.filter(
            (item) => this._filterText == null || item.name.toLowerCase().indexOf(this._filterText.toLowerCase()) >= 0
        );
    }

    private _filterText: string | undefined;

    public get filterText(): string | undefined {
        return this._filterText;
    }

    public set filterText(value: string | undefined) {
        this._filterText = value;
    }

    public onOpenChange() {
        this._filterText = undefined;
    }

    public updateEfficiency(value: Event, factory: IFactory): void {
        const targetValue = parseInt((value.target as HTMLInputElement).value);
        this.helper.updateEfficiency(targetValue, factory);
    }
}
