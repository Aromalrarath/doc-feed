import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StoryPreviewComponent } from './story-preview/story-preview.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ChatToggleComponent } from './chat-toggle/chat-toggle.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { NgxEmojiPickerModule } from "ngx-emoji-picker";
import { EmojiComponent } from './emoji/emoji.component';
import { ToastrModule } from "ngx-toastr";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PickerModule,
        NgxEmojiPickerModule,
        ToastrModule.forRoot({
            timeOut: 2000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            countDuplicates: true,
            closeButton: true
        }),
    ],
    declarations:[
        StoryPreviewComponent,
        CreatePostComponent,
        ChatToggleComponent,
        EmojiComponent,
    ],
    exports:[
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PickerModule,
        ToastrModule,
        NgxEmojiPickerModule,
        StoryPreviewComponent,
        CreatePostComponent,
        ChatToggleComponent,
        EmojiComponent,
  ]
})
export class SharedModule { }