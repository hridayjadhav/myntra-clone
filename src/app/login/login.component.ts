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
    if(this.contactNo.value && this.contactNo.value.length > 10){
      this.contactNo.setValue(this.contactNo.value.slice(0, 10));
    }
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
// document.querySelectorAll('input[type="tel"]').forEach(input =>{
//   input.oninput = () => {
//     if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
//   };
// })
