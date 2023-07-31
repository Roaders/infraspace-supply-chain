import { Pipe, PipeTransform } from '@angular/core';

import { BuildingId, buildingMaterialNameOverride } from '../constants';
import { Material } from '../contracts';
import { mapMaterialToIcon } from '../helpers';

@Pipe({ name: 'iconClass' })
export class IconClassPipe implements PipeTransform {
    transform(value: Material) {
        return mapMaterialToIcon(value);
    }
}

const upperCase = /[A-Z0-9]/g;

@Pipe({ name: 'formatName' })
export class FormatNamePipe implements PipeTransform {
    transform(name: string) {
        const overriddenName = buildingMaterialNameOverride[name as Material | BuildingId];

        if (overriddenName != null) {
            return overriddenName;
        }

        name = name.replace(/_/, '');
        return `${name.charAt(0).toUpperCase()}${name.substring(1).replace(upperCase, (existing) => ` ${existing}`)}`;
    }
}
