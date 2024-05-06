import { NgModule } from "@angular/core";
import { UsersRoutingModule } from "./users-routing.module";
import { IonicModule } from "@ionic/angular";
import { UserSearchComponent } from "./components/user-search.component";
import { UsersListComponent } from "./components/users-list.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [UsersRoutingModule, CommonModule, IonicModule, ReactiveFormsModule],
  declarations: [UserSearchComponent, UsersListComponent],
  exports: [UsersListComponent]
})
export class UsersModule { }
