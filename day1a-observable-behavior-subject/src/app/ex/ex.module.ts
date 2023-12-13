import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExComponent} from './ex.component';
import {ExAComponent} from "./ex-a/ex-a.component";
import {ExBComponent} from "./ex-b/ex-b.component";
import {ExRoutingModule} from "./ex-routing.module";
import {ExObservableService} from "../services/ex-observable.service";


@NgModule({
  declarations: [
    ExComponent
  ],
  imports: [
    CommonModule,
    ExAComponent,
    ExBComponent,
    ExRoutingModule
  ],
})
export class ExModule {
}
