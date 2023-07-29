import { Component, Input } from '@angular/core';

import { factoryLookup } from '../../constants';
import { IFactory, Material } from '../../contracts';
import { MaterialProductionModel } from '../material-production/material-production.model';

@Component({
    selector: 'bulk-factory-selector',
    templateUrl: './bulk-factory-selector.component.html',
})
export class BulkFactorySelectorComponent {
    @Input()
    public productionModel: MaterialProductionModel | undefined;

    public get selectionMaterials(): Material[] {
        if (this.productionModel == null) {
            return [];
        }

        const factories = [
            this.productionModel.selectedFactory,
            ...Array.from(this.productionModel.getTotals().keys()),
        ];

        return factories
            .map((factory) => factory.input)
            .reduce((materials, input) => addInputMaterials(materials, input), new Array<Material>())
            .filter((material) => factoryLookup[material] != null && factoryLookup[material]!.length > 1);
    }

    public getFactories(material: Material): IFactory[] {
        return factoryLookup[material] as IFactory[];
    }

    public selectFactory(factory: IFactory) {
        this.productionModel?.hierarchicalFactorySelection(factory);
    }
}

function addInputMaterials(materials: Material[], input?: Partial<Record<Material, number>>): Material[] {
    const inputMaterials = input != null ? (Object.keys(input) as Material[]) : [];

    return [...materials, ...inputMaterials.filter((material) => !materials.includes(material))];
}
