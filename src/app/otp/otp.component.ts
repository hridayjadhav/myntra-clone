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
  inputData: string = '';
  otpForm: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private sessionService: SessionService
  ) {
    this.otpForm = new FormGroup({
      otpNo: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
    });
    this.inputData = this.sessionService.getInputData();
    console.log(this.inputData);
  }

  get otpNo() {
    return this.otpForm.get('otpNo');
  }

  onSubmit() {
    console.log(this.otpForm.value);
  }

  ngOnInit(): void {
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
    this.router.navigate(['/homescreen']);
  }
}
