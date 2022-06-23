import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  form:FormGroup
  
  constructor(
    private _authService:AuthService,
    private _formBuilder:FormBuilder,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email:[null,[Validators.required]],
      password:[null,[Validators.required]],
    })
  }

}
