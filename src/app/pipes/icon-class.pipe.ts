import { Pipe, PipeTransform } from '@angular/core';

import { Material } from '../contracts';
import { mapMaterialToIcon } from '../helpers';

@Pipe({ name: 'iconClass' })
export class IconClassPipe implements PipeTransform {
    transform(value: Material) {
        return mapMaterialToIcon(value);
    }
}
