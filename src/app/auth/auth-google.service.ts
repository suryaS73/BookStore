import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';


@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  constructor(private oauthService: OAuthService) {
    this.initLogin();
  }


  initLogin() {
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '167760791890-s2simrsdvpba4f5l26pae2nj2tdn1fo0.apps.googleusercontent.com',
      redirectUri: window.location.origin + '/home',
      scope: 'openid profile email'
    }

    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initLoginFlow();
    sessionStorage.setItem('username','loggedInd');
    console.log("Logged in successfully");
    // this.getProfile();
  }

  logout() {
    this.getProfile();
    this.oauthService.logOut();
    sessionStorage.removeItem('username');
  }

  getProfile() {
    let user=this.oauthService.getIdentityClaims();
    console.log(user['firstName']);
    return user;
  }

  isLoggedIn(){

    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return (user === null);
    
  }
}
