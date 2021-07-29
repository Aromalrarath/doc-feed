import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private luid: number = null;
  private _jwtToken: string = null;
  private _jwtTokenType: string = null;
  private _jwtExpiresAt: string = null;
  private _observableJwtToken = new Subject<any>();

  constructor() { }

  getToken(): string {
    return this._jwtToken || window.localStorage.jwtToken;
}

  saveToken(token: string) {
      this._jwtToken = token;
      window.localStorage.jwtToken = token;
      this.setObservableToken(token);
  }

  saveUser(id: number) {
    this.luid = id
    window.localStorage.luid = id;
  }

  getUser():number{
    return this.luid || window.localStorage.luid;
  }

  destroyLuid(){
    window.localStorage.removeItem('luid');
  }

  destroyToken() {
    this._jwtToken = null;
    window.localStorage.removeItem('jwtToken');
    this.setObservableToken(null);
}

getTokenType(): string {
    return this._jwtTokenType || window.localStorage.jwtTokenType;
}

saveTokenType(tokenType: string) {
    this._jwtTokenType = tokenType;
    window.localStorage.jwtTokenType = tokenType;
}

destroyTokenType() {
    this._jwtTokenType = null;
    window.localStorage.removeItem('jwtTokenType');
}

getTokenExpiresAt(): string {
    return this._jwtExpiresAt || window.localStorage.jwtTokenExpiresAt;
}

saveTokenExpiresAt(tokenExpiresAt: string) {
    this._jwtExpiresAt = tokenExpiresAt;
    window.localStorage.jwtTokenExpiresAt = tokenExpiresAt;
}

destroyTokenExpiresAt() {
    this._jwtExpiresAt = null;
    window.localStorage.removeItem('jwtTokenExpiresAt');
}

clear() {
    this.destroyLuid()
    this.destroyToken();
    this.destroyTokenType();
    this.destroyTokenExpiresAt();
}

  setObservableToken(token){
    this._observableJwtToken.next(token);
  }

  isLoggedIn():Observable<any>{
      return this._observableJwtToken.asObservable();
  }
}
