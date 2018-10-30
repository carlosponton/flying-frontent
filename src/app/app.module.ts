import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabinaComponent } from './cabina/cabina.component';
import { MotorComponent } from './motor/motor.component';
import { FusulajeComponent } from './fusulaje/fusulaje.component';

@NgModule({
  declarations: [
    AppComponent,
    CabinaComponent,
    MotorComponent,
    FusulajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
