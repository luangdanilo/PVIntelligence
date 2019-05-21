import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PharmacovigilanceComponent } from './pharmacovigilance/pharmacovigilance.component';
import { PracComponent } from './prac/prac.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pharmacovigilance', component: PharmacovigilanceComponent },
  { path: 'prac', component: PracComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
