import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReposListComponent } from "./components/repos-list.component";
import { ReposForksComponent } from "./components/repos-forks.component";
import { UsersListComponent } from "../users/components/users-list.component";

const routes: Routes = [
  {
    path: ':user',
    component: ReposListComponent
  },
  {
    path: ':user/:repo/forks',
    component: ReposForksComponent
  },
  {
    path: ':user/:repo/:type',
    component: UsersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposRoutingModule { }
