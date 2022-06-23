import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post, PostResponse } from 'src/app/models/post.model';
import { AuthStore } from 'src/app/store/auth.store';
import { PostStore } from 'src/app/store/post/post.store';
import { UtilityService } from '../utility.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private _http:HttpClient,
    private _utilityService: UtilityService
  ) { }

  fetchAllPosts(){
    return this._http.get('/posts').pipe(
      map((res: Post[]) => {
          PostStore.setAllPosts(res);
          return res;
      }),
    );
  }

  fetchLoginUserPosts(userId){
    return this._http.get('/post/'+userId).pipe(
      map((res: PostResponse) => {
          PostStore.setUserPost(res);
          return res;
      }),
    );
  }

  createLoginUserPosts(post){
    return this._http.post('/post',post).pipe(
      map((res: PostResponse) => {  
        this._utilityService.showSuccessMessage('Success', 'New Post Created !')
          return res;
      }),
    );
  }

  updateLoginUserPosts(post){
    return this._http.put('/post/update',post).pipe(
      map((res: PostResponse) => {  
        this._utilityService.showSuccessMessage('Success', 'Post updated successfully !')
          return res;
      }),
    );
  }

  likeUserPosts(data){
    return this._http.post('/like',data).pipe(
      map((res: PostResponse) => {  
        this._utilityService.showErrorMessage('Success', 'Post liked successfully !')
          return res;
      }),
    );
  }

  deleteUserPosts(postId){
    return this._http.delete('/post/'+postId).pipe(
      map((res: PostResponse) => {  
        this._utilityService.showErrorMessage('Success', 'Post deleted successfully !')
          return res;
      }),
    );
  }
}
