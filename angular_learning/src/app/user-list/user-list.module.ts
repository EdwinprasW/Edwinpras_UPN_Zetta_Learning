import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ViewComponent } from './view/view.component';
import { UserListRoutingModule } from './user-list-routing.module';




@NgModule({
  declarations: [
 ViewComponent,UsersComponent
  ],
  imports: [
    CommonModule,
    UserListRoutingModule
  ]
})
export class UserListModule { }
