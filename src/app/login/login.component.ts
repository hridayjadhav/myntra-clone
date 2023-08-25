import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  loginForm: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sessionService: SessionService
  ) {  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      contactNo: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
    });
  }

  get contactNo() {
    return this.loginForm.get('contactNo');
  }

  goToOtp() {
    this.sessionService.mobileNo = this.loginForm.get('contactNo').value;    //jo input me value thi usse mobileNo pe assign krdiye. -> otp me jaake mobileNo ko get kiya ( lifecycle hook / constructor )
    this.router.navigate(['/otp']);    
  }

  onSubmitForm(){
    this.router.navigate(['/otp']);
  }

  


  
}
