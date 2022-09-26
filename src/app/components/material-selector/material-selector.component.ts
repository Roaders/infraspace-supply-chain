import { Component, EventEmitter, Output } from '@angular/core';

import { Material, Materials } from '../../contracts';

@Component({
    selector: 'material-selector',
    templateUrl: './material-selector.component.html',
    styleUrls: ['./material-selector.component.scss'],
})
export class MaterialSelectorComponent {
    private _materials = Array.from(Materials).sort();

    public get materials(): ReadonlyArray<Material> {
        return this._materials;
    }

    public get buttonText(): string {
        return this._selectedMaterial != null ? this._selectedMaterial : 'Select Material...';
    }

    @Output()
    public selectedMaterialChange = new EventEmitter<Material | undefined>();

    private _selectedMaterial: Material | undefined;

    public get selectedMaterial(): Material | undefined {
        return this._selectedMaterial;
    }

    public selectMaterial(material: Material): void {
        this._selectedMaterial = material;

        this.selectedMaterialChange.next(material);
    }
}
