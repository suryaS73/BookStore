import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AuthGoogleService } from '../../auth-google.service';
import { Router } from '@angular/router';
import { ToolbarService } from 'src/app/shared/services/toolbar.service';
import { ToolbarComponent } from 'src/app/shared/components/toolbar/toolbar.component';
import { BdService } from 'src/app/shared/services/bd.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm=new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required])
  });

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

  login(data:any) {
    console.log(data.name);
    // this.showSpinner=true;
   let status= this.dbService.checkDetails(data.name);
    if(status){
      console.log("status of checckingDetails "+status);
     this.router.navigate(["books"]);
     
    }else {
      console.log("status of checckingDetails "+status);
      this.showSpinner=false;
      this.router.navigate(["auth/login"]);
      alert("Invalid credentials");
    }
  }

  googleLogin(){
    this.authGoogleService.login();
  }
  }
