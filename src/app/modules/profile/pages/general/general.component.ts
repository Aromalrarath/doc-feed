import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/service/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { AuthStore } from 'src/app/store/auth.store';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  form : FormGroup

  constructor(
    private _formBuilder:FormBuilder,
    private _authService:AuthService,
    private _userService:UserService,
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      firstName:[null],
      lastName:[null],
      username:[null],
      mobile:[null, Validators.maxLength(10)],
      email:[null,[Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password:[null,[Validators.pattern(/^\d{10}$/)]],
      intro:[null],
      profile:[null]
    })
    this.fetchUserData()
  }

  fetchUserData(){
    this._authService.fetchUser().subscribe(res => {
      this.form.patchValue({
        firstName:AuthStore.user.firstName,
        lastName:AuthStore.user.lastName,
        username:AuthStore.user.username,
        mobile:AuthStore.user.mobile,
        email:AuthStore.user.email,
        intro:AuthStore.user.intro,
        profile:AuthStore.user.profile,
      })
    })
  }

  updateUserDetails(){
    console.log("form",this.form.value)
    this._userService.updateUser(this.form.value).subscribe(res => {
      this.fetchUserData()
    })
  }

}
