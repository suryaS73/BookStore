import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BdService } from 'src/app/shared/services/bd.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userRegistrationForm=new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required])
  });

  constructor(private router: Router,private dbService:BdService ) { }

  signup(data:any){
    this.dbService.registerUser(data);
    this.router.navigate(["auth/login"]);
    
  }

}
