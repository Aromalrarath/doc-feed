import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainVideoComponent } from './pages/main-video.component';
import { VideosListComponent } from './pages/videos-list/videos-list.component';

const routes: Routes = [
    {
        path:'',
        component:MainVideoComponent,
        data: {
            core: { title: 'Video Lists' }
        },
        children:[
            {
                path:'',
                component:VideosListComponent,
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VideosRoutingModule { }