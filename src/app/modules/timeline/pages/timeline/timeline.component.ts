import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { PostService } from 'src/app/core/services/post/post.service';
import { AuthStore } from 'src/app/store/auth.store';
import { PostStore } from 'src/app/store/post/post.store';

declare var $:any
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  AuthStore = AuthStore;
  PostStore = PostStore

  editPopupObject = {
    type:null,
    value:null
  }
  closePostSubscription: any;

  constructor(
    private _postService: PostService,
    private _eventEmitterService: EventEmitterService
  ) { }

  ngOnInit(): void {
    this.fetchUserPosts()
    this.closePostSubscription = this._eventEmitterService.hidCreatePostModal.subscribe(status => {
      this.removeTimelinePost()
    })
  }

  fetchUserPosts(){
    this._postService.fetchLoginUserPosts(AuthStore.userId?AuthStore.userId:AuthStore.user?.id?AuthStore.user?.id:'')
    .subscribe(res => {

    })
  }

  deleteTimelinePost(postId){
    this._postService.deleteUserPosts(postId).subscribe(res => {
      this.fetchUserPosts()
    })
  }

  addTimelinePost(){
    this.editPopupObject.type = 'Add';
    $('#create-post-modal').addClass('uk-open').show();
  }

  editTimelinePost(post){
    this.editPopupObject.type = 'Edit'
    this.editPopupObject.value = {
      id: post.id,
      description: post.description,
      userId: post.userId
    }
    $('#create-post-modal').addClass('uk-open').show();
  }

  removeTimelinePost(){
    this.fetchUserPosts()
    this.editPopupObject.value = null
    this.editPopupObject.type = null
    $('#create-post-modal').removeClass('uk-open').hide();
  }

}
