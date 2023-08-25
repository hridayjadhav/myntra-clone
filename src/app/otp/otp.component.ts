import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit, OnDestroy {
  num = 10;
  interval: any;
  inputData: string = '';    //emtry string pass kiya kyuki value fetch krega 
  otpForm: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private sessionService: SessionService
  ) {                                             //jab b form load hoga to sbse pehle ye execute hoga isliye hum ise use krte hai.
    this.otpForm = new FormGroup({     
      otpNo: new FormControl('', [     
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        
      ]),
    });
    console.log(this.otpForm);
  }

  get otpNo() {
    return this.otpForm.get('otpNo');   //  input ka pura data including validation wo return krega.
  }

  ngOnInit(): void {
    this.inputData = this.sessionService.mobileNo;    // empty string jo define kiya use this. se bulake usme mobileNo ki value daaldiye. this is normal variable thats why we didn't used .value method.
    this.interval = setInterval(() => this.numDecrement(this.num), 1000);
  }

  restartTimer() {
    this.num = 10;
    this.interval = setInterval(() => this.numDecrement(this.num), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  numDecrement(numRecieved: number) {
    this.num--;
    if (this.num === 0) {
      clearInterval(this.interval);
    }
  }

  goToOtp() {
    // console.log(this.otpForm.controls.otpNo.value);
    this.router.navigate(['/homescreen']);
  }

  onSubmit(){
    this.router.navigate(['/homescreen']);
  }
}
