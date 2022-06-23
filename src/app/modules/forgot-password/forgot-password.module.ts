import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './pages/general/general.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';



@NgModule({
  declarations: [
    GeneralComponent,
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ForgotPasswordRoutingModule
  ]
})
export class ForgotPasswordModule { }
