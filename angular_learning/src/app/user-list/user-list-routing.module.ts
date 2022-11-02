import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';


const routes : Routes = [
  {
    path: '',
    pathMatch:'full',
    component: UsersComponent 
  },
  {
    path: '**',
    pathMatch:'full',
    redirectTo:''
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule { }
