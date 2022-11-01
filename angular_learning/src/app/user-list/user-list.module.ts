import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    UsersComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserListModule { }
