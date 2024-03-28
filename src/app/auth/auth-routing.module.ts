import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [

      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    OAuthModule
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
