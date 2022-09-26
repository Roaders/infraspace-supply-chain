import { Component } from '@angular/core';

import { Material } from '../../contracts';

@Component({
    selector: 'supply-chain',
    templateUrl: './supply-chain.component.html',
})
export class SupplyChainComponent {
    private _selectedMaterial: Material | undefined;

    public get selectedMaterial(): Material | undefined {
        return this._selectedMaterial;
    }

    public onMaterialSelected(material?: Material) {
        this._selectedMaterial = material;
    }
}
