import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ForTrackExComponent} from "./for-track-ex.component";

const routes: Routes = [
  {
    path: "",
    component: ForTrackExComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForTrackRoutingExModule { }
