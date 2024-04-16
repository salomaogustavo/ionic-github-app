import { NgModule } from "@angular/core";
import { ReposRoutingModule } from "./repos-routing.module";
import { IonicModule } from "@ionic/angular";
import { ReposListComponent } from "./components/repos-list.component";
import { ReposForksComponent } from "./components/repos-forks.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: ReposListComponent,
  },
  {
    path: ':repo/forks',
    component: ReposForksComponent,
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes), ReposRoutingModule, CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
    declarations: [ReposListComponent, ReposForksComponent],
    exports: [RouterModule],
})
export class ReposModule { }
