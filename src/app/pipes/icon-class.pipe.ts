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
        return formatName(name);
    }
}

export function formatName(value: string): string {
    const overriddenName = buildingMaterialNameOverride[value as Material | BuildingId];

    if (overriddenName != null) {
        return overriddenName;
    }

    value = value.replace(/_/, '');
    return `${value.charAt(0).toUpperCase()}${value.substring(1).replace(upperCase, (existing) => ` ${existing}`)}`;
}
