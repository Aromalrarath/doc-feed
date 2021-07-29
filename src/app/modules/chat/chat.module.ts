import { NgModule } from '@angular/core';
import { ChatRoutingModule } from './chat.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainChatComponent } from './pages/main-chat.component';
import { ChatListComponent } from './pages/chat-list/chat-list.component';
import { ChatDetailsComponent } from './pages/chat-details/chat-details.component';



@NgModule({
  declarations: [
    MainChatComponent,
    ChatListComponent,
    ChatDetailsComponent
  ],
  imports: [
    SharedModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
