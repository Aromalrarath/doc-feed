import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRoutingModule } from './user.router.module';
import { MainUsersComponent } from './pages/main-users.component';
import { UsersListComponent } from './pages/users-list/users-list.component';



@NgModule({
  declarations: [
    MainUsersComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UsersModule { }
