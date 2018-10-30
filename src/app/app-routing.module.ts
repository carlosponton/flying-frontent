import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FusulajeComponent} from './fusulaje/fusulaje.component';

const routes: Routes = [
  { path: '', component: FusulajeComponent },
  { path: 'planetas/:planet', component: FusulajeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
