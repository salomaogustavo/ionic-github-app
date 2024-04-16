import { NgModule } from "@angular/core";
import { UsersRoutingModule } from "./users-routing.module";
import { IonicModule } from "@ionic/angular";
import { UsersListComponent } from "./components/users-list.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [UsersRoutingModule, CommonModule, IonicModule],
    declarations: [UsersListComponent]
})
export class UsersModule { }
