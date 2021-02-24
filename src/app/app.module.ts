import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { AccountComponent } from './account/account.component';

import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    DiscoveryComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PrimeNG Modules
    TabMenuModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
