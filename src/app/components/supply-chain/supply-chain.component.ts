import { Component } from '@angular/core';

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

    private _productionModel: MaterialProductionModel<Material> | undefined;

    public get productionModel(): MaterialProductionModel<Material> | undefined {
        return this._productionModel;
    }

    public onMaterialSelected(material?: Material) {
        this._productionModel = material != null ? this.productionFactory.create(material) : undefined;
    }
}
