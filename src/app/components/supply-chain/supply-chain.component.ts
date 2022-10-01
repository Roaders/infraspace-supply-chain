import { Component, Input } from '@angular/core';

import { Material } from '../../contracts';
import {
    MaterialProductionModel,
    MaterialProductionModelFactory,
} from '../material-production/material-production.model';

@Component({
    selector: 'supply-chain',
    templateUrl: './supply-chain.component.html',
})
export class SupplyChainComponent {
    constructor(private productionFactory: MaterialProductionModelFactory) {}

    private _material: Material | undefined;

    @Input()
    public get material(): Material | undefined {
        return this._material;
    }

    public set material(value: Material | undefined) {
        this._material = value;

        this._productionModel = value != null ? this.productionFactory.create(value) : undefined;
    }

    private _productionModel: MaterialProductionModel<Material> | undefined;

    public get productionModel(): MaterialProductionModel<Material> | undefined {
        return this._productionModel;
    }
}
