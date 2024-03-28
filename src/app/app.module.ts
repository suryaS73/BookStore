import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../public-components/about-us/about-us.component';
import { HowItWorksComponent } from '../public-components/how-it-works/how-it-works.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
// import { UserModule } from './user/user.module';
// import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from 'src/public-components/home/home.component';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent,
    HomeComponent  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OAuthModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
