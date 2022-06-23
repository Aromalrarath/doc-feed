import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { PostService } from 'src/app/core/services/post/post.service';
import { UtilityService } from 'src/app/core/services/utility.service';
import { AppStore } from 'src/app/store/app.store';
import { AuthStore } from 'src/app/store/auth.store';
import { PostStore } from 'src/app/store/post/post.store';

declare var $:any
@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  PostStore = PostStore;
  AuthStore = AuthStore
  AppStore = AppStore

  editPopupObject = {
    type:null,
    value:null
  }
  closePostSubscription: any;

  constructor(
    private _postService: PostService,
    private _utilityService: UtilityService,
    private _cdr: ChangeDetectorRef,
    private _eventEmitterService: EventEmitterService
  ) { }

  ngOnInit(): void {
    this.findAllPostsForFeed()
    this.closePostSubscription = this._eventEmitterService.hidCreatePostModal.subscribe(status => {
      this.removeTimelinePost()
    })
  }

  deleteTimelinePost(postId){
    this._postService.deleteUserPosts(postId).subscribe(res => {
      this.findAllPostsForFeed()
    })
  }

  likePost(postId){
    let obj = {
      id:postId
    }
    this._postService.likeUserPosts(obj).subscribe(res => {
      this.findAllPostsForFeed()
    })
  }

  addTimelinePost(){
    this.editPopupObject.type = 'Add';
    $('#create-post-modal').addClass('uk-open').show();
  }

  findAllPostsForFeed(){
    this._postService.fetchAllPosts().subscribe(res => {
      this._utilityService.detectChanges(this._cdr)
    })
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
    this.findAllPostsForFeed()
    this.editPopupObject.value = null
    this.editPopupObject.type = null
    $('#create-post-modal').removeClass('uk-open').hide();
  }

}
