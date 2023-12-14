import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForTrackExComponent } from './for-track-ex.component';
import {ForTrackRoutingExModule} from "./for-track-routing-ex.module";
import {AppModule} from "../app.module";
import {ForTrackExAComponent} from "./for-track-ex-a/for-track-ex-a.component";



@NgModule({
  declarations: [
    ForTrackExComponent,
    ForTrackExAComponent
  ],
  imports: [
    CommonModule,
    ForTrackRoutingExModule,
  ]
})
export class ForTrackExModule { }
