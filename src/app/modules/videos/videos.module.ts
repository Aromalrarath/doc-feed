import { NgModule } from '@angular/core';
import { MainVideoComponent } from './pages/main-video.component';
import { VideosListComponent } from './pages/videos-list/videos-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VideosRoutingModule } from './videos.routing.module';



@NgModule({
  declarations: [
    MainVideoComponent,
    VideosListComponent
  ],
  imports: [
    SharedModule,
    VideosRoutingModule
  ]
})
export class VideosModule { }
