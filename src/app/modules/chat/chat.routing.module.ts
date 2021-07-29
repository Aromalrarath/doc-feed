import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainChatComponent } from './pages/main-chat.component';

const routes: Routes = [
    {
        path:'',
        component:MainChatComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatRoutingModule { }