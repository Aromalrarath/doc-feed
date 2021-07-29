import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimelineRoutingModule } from './timeline.routing.module';
import { MainTimelineComponent } from './pages/main-timeline.component';
import { TimelineComponent } from './pages/timeline/timeline.component';



@NgModule({
  declarations: [
    MainTimelineComponent,
    TimelineComponent
  ],
  imports: [
    SharedModule,
    TimelineRoutingModule
  ]
})
export class TimelineModule { }
