import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserSearchComponent } from "./components/user-search.component";

const routes: Routes = [
  {
    path: '',
    component: UserSearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
