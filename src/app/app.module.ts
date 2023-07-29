import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import npmPackage from '../../package.json';
import { AppComponent } from './components/app/app.component';
import { BulkFactorySelectorComponent } from './components/bulk-factory-selector/bulk-factory-selector.component';
import { EfficiencySelectorComponent } from './components/efficiency-selector/efficiency-selector.component';
import { MaterialProductionComponent } from './components/material-production/material-production.component';
import { MaterialSelectorComponent } from './components/material-selector/material-selector.component';
import { SupplyChainComponent } from './components/supply-chain/supply-chain.component';
import { SupplyChainBrowserComponent } from './components/supply-chain-browser/supply-chain-browser.component';
import { TotalsDisplayComponent } from './components/totals-display/totals-display.component';
import { FormatNamePipe, IconClassPipe } from './pipes';

@NgModule({
    declarations: [
        AppComponent,
        MaterialSelectorComponent,
        SupplyChainComponent,
        SupplyChainBrowserComponent,
        MaterialProductionComponent,
        TotalsDisplayComponent,
        BulkFactorySelectorComponent,
        IconClassPipe,
        EfficiencySelectorComponent,
        FormatNamePipe,
    ],
    imports: [BrowserModule, NgbModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor() {
        window.document.title = `Infraspace Supply Chain v${npmPackage.version}`;
    }
}
