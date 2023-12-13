import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {Ex2Component} from "./ex-2.component";

const routes: Routes = [
  {path: "", component: Ex2Component},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ex2RoutingModule { }
