import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesListComponent } from './pages/pages-list/pages-list.component';
import { MainPageComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    PagesListComponent,
    MainPageComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
