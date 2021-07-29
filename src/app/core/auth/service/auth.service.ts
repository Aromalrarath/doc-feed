import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { JwtToken } from 'src/app/models/auth.model';
import { User } from 'src/app/models/user.model';
import { AuthStore } from 'src/app/store/auth.store';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient,
    private _jwtService:JwtService
  ) { }

  registerUser(userData):Observable<User>{
    return this._http.post('/users', userData)
    .pipe(map(
        (res: User) => {
            console.log(res);
            return res;
        }
    ));
  }

  authLogin(auth):Observable<JwtToken>{
    return this._http.post('/user/login', auth)
      .pipe(map(
        (res: JwtToken) => {
          AuthStore.setUserId(res.id)
          this._jwtService.saveUser(res.id)
          if(res)this.setToken(res);
          return res;
        }
    ));
  }

  // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    populate() {
      if (this._jwtService.getToken()&&(this._jwtService.getUser()||AuthStore.userId||AuthStore.user?.id)) {
          return this._http.get('/users/'+(this._jwtService.getUser()?this._jwtService.getUser():AuthStore.userId?AuthStore.userId:AuthStore.user?.id?AuthStore.user?.id:'')).pipe(
            map((res: User) => {
                AuthStore.setUser(res);
                return res;
            }),
            catchError((err: HttpErrorResponse) => {
                this.purgeAuth();
                throw err;
            })
        );
          // AuthStore.logedInUser
      } else {
          // Remove any potential remnants of previous auth states
          this.purgeAuth();
          of(false);
      }
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this._jwtService.clear();

    // Set current user to null
    AuthStore.setUser(null);

    // Clear User Permission
    AuthStore.userPermissions = [];
  }

  setToken(jwtToken: JwtToken) {
    // Save JWT sent from server in localstorage
    this._jwtService.saveToken(jwtToken.token);
    this._jwtService.saveTokenType(jwtToken.token_type);
    this._jwtService.saveTokenExpiresAt(jwtToken.expires_at);
  }
}
