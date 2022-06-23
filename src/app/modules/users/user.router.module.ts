import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainUsersComponent } from './pages/main-users.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

const routes: Routes = [
    {
        path:'',
        component:MainUsersComponent,
        children:[
            {
                path:'',
                component:UsersListComponent,
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }