import { Component } from '@angular/core';

import { Material } from '../../contracts';

@Component({
    selector: 'supply-chain-browser',
    templateUrl: './supply-chain-browser.component.html',
})
export class SupplyChainBrowserComponent {
    private _material: Material | undefined;

    public get material(): Material | undefined {
        return this._material;
    }

    public showComparison = false;

    public onMaterialSelected(material?: Material) {
        this._material = material;
    }
}
