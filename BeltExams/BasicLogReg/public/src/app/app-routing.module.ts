import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { DisplayComponent } from './display/display.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: 'create', component: CreateComponent },
  { path: 'display/:id', component: DisplayComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
