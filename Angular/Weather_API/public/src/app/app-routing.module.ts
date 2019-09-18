import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonDCComponent } from './washington-dc/washington-dc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'burbank', component: BurbankComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'sanjose', component: SanJoseComponent },
  { path: 'seattle', component: SeattleComponent },
  { path: 'washingtondc', component: WashingtonDCComponent },
  { path: '', pathMatch: 'full', redirectTo: '/dallas' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
