import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/service/auth.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  form:FormGroup

  constructor(
    private _authService:AuthService,
    private _formBuilder:FormBuilder,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email:[null,[Validators.required,Validators.email]]
    })
  }

  forgotPassword(){
    this._authService.forgotPassword(this.form.value).subscribe(res =>{
      if(res){
        this._router.navigateByUrl('login')
      }
    })
  }

}
