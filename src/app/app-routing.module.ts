import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FusulajeComponent} from './fusulaje/fusulaje.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'control', component: FusulajeComponent },
  { path: 'planetas/:planet', component: FusulajeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
