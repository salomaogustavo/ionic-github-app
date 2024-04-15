import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReposListComponent } from "./components/repos-list.component";

const routes: Routes = [
  {
    path: '',
    component: ReposListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposRoutingModule { }
