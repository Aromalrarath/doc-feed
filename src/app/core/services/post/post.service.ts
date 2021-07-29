import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PostResponse } from 'src/app/models/post.model';
import { AuthStore } from 'src/app/store/auth.store';
import { PostStore } from 'src/app/store/post/post.store';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private _http:HttpClient
  ) { }

  fetchLoginUserPosts(userId){
    return this._http.get('/post/'+userId).pipe(
      map((res: PostResponse) => {
          PostStore.setUserPost(res);
          return res;
      }),
    );
  }
}
