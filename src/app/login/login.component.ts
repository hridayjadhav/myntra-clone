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
    this.loginForm = this.fb.group({
      contactNo: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]]
    });
  }

  limit(){
    if(this.contactNo.value && this.contactNo.value.length > 10){    //if the number is more than 10, then the slice will show only 10 digits and it will automatically removes remaining digits.
      this.contactNo.setValue(this.contactNo.value.slice(0, 10));    //contactNo value aur uski lenth agr 10 se zyada hai, to wo 10 number hi lega aur baki slice krega
    }
  }

  get contactNo() {
    return this.loginForm.get('contactNo');
  }

  goToOtp() {
    // this.sessionService.mobileNo = this.loginForm.get('contactNo').value;    //jo input me value thi usse mobileNo pe assign krdiye. -> otp me jaake mobileNo ko get kiya ( lifecycle hook / constructor )
    const mobileNo = this.loginForm.get('contactNo').value;
    this.router.navigate(['/otp', mobileNo]);    

  }

  onSubmitForm(){
    this.router.navigate(['/otp']);
  }


  

  


  
}

