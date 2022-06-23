import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RequestList, User, UserList } from 'src/app/models/user.model';
import { AuthStore } from 'src/app/store/auth.store';
import { UserStore } from 'src/app/store/users/user.store';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient,
    private _utilityService:UtilityService
  ) { }

  fetchUser(){
    return this._http.get('/users/'+(AuthStore.userId?AuthStore.userId:AuthStore.user?.id?AuthStore.user?.id:'')).pipe(
      map((res: User) => {
          AuthStore.setUser(res);
          return res;
      }),
    );
  }

  updateUser(user) {
    return this._http.put('/users/'+(AuthStore.userId?AuthStore.userId:AuthStore.user?.id?AuthStore.user?.id:''),user).pipe(
      map((res: User) => {
        this._utilityService.showSuccessMessage('Success','User updated!')
          return res;
      }),
    );
  }

  findAllUsersFriendRequests(){
    return this._http.get('/friend-req-by-user/'+(AuthStore.userId?AuthStore.userId:AuthStore.user?.id?AuthStore.user?.id:'')).pipe(
      map((res: RequestList) => {
          UserStore.setRequestList(res)
          return res;
      }),
    );
  }

  findAllUsersForFriendsList(){
    return this._http.get('/users/all?userId='+(AuthStore.userId?AuthStore.userId:AuthStore.user?.id?AuthStore.user?.id:'')).pipe(
      map((res: UserList) => {
          UserStore.setUserList(res)
          return res;
      }),
    );
  }

  findAllFriendsList(){
    return this._http.get('/friends-list/'+(AuthStore.userId?AuthStore.userId:AuthStore.user?.id?AuthStore.user?.id:'')).pipe(
      map((res: RequestList) => {
          UserStore.setFriendsList(res)
          return res;
      }),
    );
  }

}
