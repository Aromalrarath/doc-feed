import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/service/auth.service';
import { AuthStore } from 'src/app/store/auth.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup

  constructor(
    private _authService:AuthService,
    private _formBuilder:FormBuilder,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      username:[null,[Validators.required]],
      password:[null,[Validators.required]],
    })
  }

  login(){
    this._authService.authLogin(this.form.value).subscribe(res=>{
      if (AuthStore.redirectUrl) {
        const url = AuthStore.redirectUrl;
        AuthStore.setRedirectUrl(null);
        this._router.navigateByUrl(url);
      }else this._router.navigateByUrl('/feeds');
    })
  }

}
