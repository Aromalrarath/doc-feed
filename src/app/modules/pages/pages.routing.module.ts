import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page.component';
import { PagesListComponent } from './pages/pages-list/pages-list.component';

const routes: Routes = [
    {
        path:'',
        component:MainPageComponent,
        data: {
            core: { title: 'Page Lists' }
        },
        children:[
            {
                path:'',
                component:PagesListComponent,
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }