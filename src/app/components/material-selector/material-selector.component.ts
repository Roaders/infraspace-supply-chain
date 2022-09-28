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

    public get filteredMaterials(): ReadonlyArray<Material> {
        return this._materials.filter(
            (item) => this._filterText == null || item.toLowerCase().indexOf(this._filterText.toLowerCase()) >= 0
        );
    }

    public get buttonText(): string {
        return this._selectedMaterial != null ? this._selectedMaterial : 'Select Material...';
    }

    private _filterText: string | undefined;

    public get filterText(): string | undefined {
        return this._filterText;
    }

    public set filterText(value: string | undefined) {
        this._filterText = value;
    }

    @Output()
    public selectedMaterialChange = new EventEmitter<Material | undefined>();

    private _selectedMaterial: Material | undefined;

    public get selectedMaterial(): Material | undefined {
        return this._selectedMaterial;
    }

    public selectMaterial(material: Material): void {
        this._selectedMaterial = material;
        this._filterText = undefined;

        this.selectedMaterialChange.next(material);
    }

    public onOpenChange() {
        this._filterText = undefined;
    }
}
