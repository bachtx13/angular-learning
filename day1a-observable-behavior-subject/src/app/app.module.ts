import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExAComponent } from './ex/ex-a/ex-a.component';
import { ExBComponent } from './ex/ex-b/ex-b.component';
import {ExObservableService} from "./services/ex-observable.service";
import { ErrorComponent } from './error/error.component';
import { Ex2Component } from './ex-2/ex-2.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    Ex2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ExObservableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
