import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AuthGoogleService } from '../../auth-google.service';
import { Router } from '@angular/router';
import { ToolbarService } from 'src/app/shared/services/toolbar.service';
import { ToolbarComponent } from 'src/app/shared/components/toolbar/toolbar.component';
import { BdService } from 'src/app/shared/services/bd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // constructor(private authGoogleService: AuthGoogleService) { }

  // login() {
  //   // this.authGoogleService.login();
  // },
  constructor(private router: Router,private authGoogleService: AuthGoogleService,private dbService:BdService ) { }

  username:string;
  password: string;
  showSpinner:boolean ;

  ngOnInit() {
    this.showSpinner=false;
  }

  login() {
    this.showSpinner=true;
    if(this.username != null  && this.password != null){
      sessionStorage.setItem('username',this.username);
     this.router.navigate(["books"]);
     
    }else {
      this.showSpinner=false;
      alert("Invalid credentials");
    }
  }

  googleLogin(){
    this.authGoogleService.login();
  }
  }
