import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFeedComponent } from './pages/main-feed.component';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { FeedRoutingModule } from './feed.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesFeedComponent } from './pages/pages-feed/pages-feed.component';



@NgModule({
  declarations: [
    MainFeedComponent,
    NewsFeedComponent,
    PagesFeedComponent
  ],
  imports: [
    SharedModule,
    FeedRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FeedModule { }
