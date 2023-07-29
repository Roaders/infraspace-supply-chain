import { Pipe, PipeTransform } from '@angular/core';

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
        return `${name.charAt(0).toUpperCase()}${name.substring(1).replace(upperCase, (existing) => ` ${existing}`)}`;
    }
}
