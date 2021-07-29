import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form : FormGroup
  fPwd

  constructor(
    private _formBuilder:FormBuilder,
    private _authService:AuthService
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      firstName:[null,[Validators.required]],
      lastName:[null,[Validators.required]],
      username:[null,[Validators.required]],
      mobile:[null,[Validators.required], Validators.maxLength(10)],
      email:[null,[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password:[null,[Validators.required, Validators.pattern(/^\d{10}$/)]],
    })
  }

  signup(){
    console.log(this.form)
    // this._authService.registerUser(this.form.value).subscribe(res=>{

    // })
  }

}

