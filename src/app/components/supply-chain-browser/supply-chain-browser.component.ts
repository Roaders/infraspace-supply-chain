import { Component } from '@angular/core';

import { Material } from '../../contracts';
import { ThemeService } from '../../services';

@Component({
    selector: 'supply-chain-browser',
    templateUrl: './supply-chain-browser.component.html',
})
export class SupplyChainBrowserComponent {
    constructor(private themeService: ThemeService) {}

    private _material: Material | undefined;

    public get material(): Material | undefined {
        return this._material;
    }

    public onMaterialSelected(material?: Material) {
        this._material = material;
    }

    public get darkThemeSelected(): boolean {
        return this.themeService.theme === 'dark';
    }

    public set darkThemeSelected(value: boolean) {
        this.themeService.updateTheme(value ? 'dark' : 'light');
    }
}
