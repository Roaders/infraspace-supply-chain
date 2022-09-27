import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app/app.component';
import { BulkFactorySelectorComponent } from './components/bulk-factory-selector/bulk-factory-selector.component';
import { MaterialProductionComponent } from './components/material-production/material-production.component';
import { MaterialSelectorComponent } from './components/material-selector/material-selector.component';
import { SupplyChainComponent } from './components/supply-chain/supply-chain.component';
import { SupplyChainBrowserComponent } from './components/supply-chain-browser/supply-chain-browser.component';
import { TotalsDisplayComponent } from './components/totals-display/totals-display.component';

@NgModule({
    declarations: [
        AppComponent,
        MaterialSelectorComponent,
        SupplyChainComponent,
        SupplyChainBrowserComponent,
        MaterialProductionComponent,
        TotalsDisplayComponent,
        BulkFactorySelectorComponent,
    ],
    imports: [BrowserModule, NgbModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
