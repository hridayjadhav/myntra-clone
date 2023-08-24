import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
      
export class LoginComponent implements OnInit  {
  
   loginForm : any;
  // public loginForm! : FormGroup;

  constructor(private fb: FormBuilder, private router : Router, private sessionService : SessionService){

    this.loginForm = new FormGroup({
      contactNo : new FormControl ('', [
        Validators.required, 
        // Validators.pattern(('^[789]\d{9}$')),
        Validators.minLength(10),
        Validators.maxLength(10),
      
      ]),
    });
  
  }

  get contactNo(){
    return this.loginForm.get('contactNo');
  }

  onSubmit(){
    console.log(this.loginForm.value);
    
  }
  goToOtp(){
    this.router.navigate(['/otp']);
    
  }

  ngOnInit(): void {
  }




}
