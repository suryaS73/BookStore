import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { AuthGoogleService } from './auth-google.service';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ChangePasswordComponent,
    AuthComponent
     ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class AuthModule { 

  
}
