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
        switch (name) {
            case 'monumentDrill_Stage1':
            case 'monumentDrill_Stage2':
            case 'monumentDrill_Stage3':
            case 'monumentDrill_Stage4':
                return 'Adamantine Drill';

            case 'sciencePack1Factory':
                return 'Blue Science Pack Factory';
            case 'sciencePack2Factory':
                return 'Green Science Pack Factory';
            case 'sciencePack3Factory':
                return 'Yellow Science Pack Factory';
            case 'sciencePack4Factory':
                return 'Red Science Pack Factory';

            case 'sciencePack1':
                return 'Blue Science Pack';
            case 'sciencePack2':
                return 'Green Science Pack';
            case 'sciencePack3':
                return 'Yellow Science Pack';
            case 'sciencePack4':
                return 'Red Science Pack';
        }

        name = name.replace(/_/, '');
        return `${name.charAt(0).toUpperCase()}${name.substring(1).replace(upperCase, (existing) => ` ${existing}`)}`;
    }
}
