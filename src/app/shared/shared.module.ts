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


@NgModule({
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PickerModule,
        NgxEmojiPickerModule
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
        NgxEmojiPickerModule,
        StoryPreviewComponent,
        CreatePostComponent,
        ChatToggleComponent,
        EmojiComponent,
  ]
})
export class SharedModule { }