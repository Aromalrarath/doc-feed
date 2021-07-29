import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './pages/general/general.component';
import { MainProfileComponent } from './pages/main-profile.component';

const routes: Routes = [
    
    {
        path:'',
        component:MainProfileComponent,
        
        data: {
            core: { title: 'Profile' }
        },
        children:[
            {
                path:'general',
                component:GeneralComponent,
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }