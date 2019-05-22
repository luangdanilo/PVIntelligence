import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PharmacovigilanceComponent } from './pharmacovigilance/pharmacovigilance.component';
import { PracComponent } from './prac/prac.component';
import { MedicalDeviceVigilanceComponent } from './medical-device-vigilance/medical-device-vigilance.component';
import { CosmetovigilanceComponent } from './cosmetovigilance/cosmetovigilance.component';
import { OtcComponent } from './otc/otc.component';
import { RegulatoryTextComponent } from './regulatory-text/regulatory-text.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministrationComponent } from './administration/administration.component';
import { NutrivigilanceComponent } from './nutrivigilance/nutrivigilance.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PharmacovigilanceComponent,
    PracComponent,
    MedicalDeviceVigilanceComponent,
    CosmetovigilanceComponent,
    OtcComponent,
    RegulatoryTextComponent,
    DashboardComponent,
    AdministrationComponent,
    NutrivigilanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
