import { NgModule } from "@angular/core";
import { ReposRoutingModule } from "./repos-routing.module";
import { IonicModule } from "@ionic/angular";
import { ReposListComponent } from "./components/repos-list.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [ReposRoutingModule, CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
    declarations: [ReposListComponent]
})
export class ReposModule { }
