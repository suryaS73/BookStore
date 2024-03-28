import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  username:string;
  password: string;
  confirmPassword:string;

  constructor(private router: Router ) { }

  signup(){
    if(this.password==this.confirmPassword && this.password!=null && this.confirmPassword!=null && this.username!=null){
      this.router.navigate(["auth/login"]);
    }
    else{
      alert("password mismatch (or) Data missing");
    }
  }

}
