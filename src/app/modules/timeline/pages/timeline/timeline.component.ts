import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post/post.service';
import { AuthStore } from 'src/app/store/auth.store';
import { PostStore } from 'src/app/store/post/post.store';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  AuthStore = AuthStore;
  PostStore = PostStore

  constructor(
    private _postService: PostService
  ) { }

  ngOnInit(): void {
    this.fetchUserPosts()
  }

  fetchUserPosts(){
    this._postService.fetchLoginUserPosts(AuthStore.userId?AuthStore.userId:AuthStore.user?.id?AuthStore.user?.id:'')
    .subscribe(res => {
      console.log("Posttttttt",PostStore.post)
    })
  }

}
