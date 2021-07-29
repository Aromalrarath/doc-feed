import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFeedComponent } from './pages/main-feed.component';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { PagesFeedComponent } from './pages/pages-feed/pages-feed.component';

const routes: Routes = [
    {
        path:'',
        component:MainFeedComponent,
        data: {
            core: { title: 'News Feed' }
        },
        children:[
            {
                path:'',
                component:NewsFeedComponent,
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeedRoutingModule { }