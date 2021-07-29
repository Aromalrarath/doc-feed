import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainTimelineComponent } from './pages/main-timeline.component';
import { TimelineComponent } from './pages/timeline/timeline.component';

const routes: Routes = [
    {
        path:'',
        component:MainTimelineComponent,
        
        data: {
            core: { title: '' }
        },
        children:[
            {
                path:'',
                component:TimelineComponent,
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TimelineRoutingModule { }