import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {path: "ex", loadChildren: () => import("./ex/ex.module").then(m => m.ExModule)},
  {path: "ex2", loadChildren: () => import("./ex-2/ex-2.module").then(m => m.Ex2Module)},
  {path: "**", pathMatch: "full", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
