import { Component, Renderer2 } from '@angular/core';

import { Theme, ThemeService } from '../../services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'infraspace-supply-chain';

    constructor(private renderer: Renderer2, themeService: ThemeService) {
        this.updateTheme(themeService.theme);
        themeService.$theme.subscribe((theme) => this.updateTheme(theme));
    }

    private updateTheme(theme: Theme): void {
        this.renderer.setAttribute(document.body, 'data-bs-theme', theme);
    }
}
