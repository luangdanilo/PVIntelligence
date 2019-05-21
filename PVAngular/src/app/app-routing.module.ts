import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PharmacovigilanceComponent } from './pharmacovigilance/pharmacovigilance.component';
import { PracComponent } from './prac/prac.component';
import { MedicalDeviceVigilanceComponent } from './medical-device-vigilance/medical-device-vigilance.component';
import { CosmetovigilanceComponent } from './cosmetovigilance/cosmetovigilance.component';
import { OtcComponent } from './otc/otc.component';
import { RegulatoryTextComponent } from './regulatory-text/regulatory-text.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministrationComponent } from './administration/administration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pharmacovigilance', component: PharmacovigilanceComponent },
  { path: 'prac', component: PracComponent },
  { path: 'medical-device-vigilance', component: MedicalDeviceVigilanceComponent },
  { path: 'cosmetovigilance', component: CosmetovigilanceComponent },
  { path: 'otc', component: OtcComponent },
  { path: 'regulatory-text', component: RegulatoryTextComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
