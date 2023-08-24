import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit{
  num = 10;
  interval:any;

  constructor(private router : Router){}

  ngOnInit() : void {
    this.interval = setInterval (()=> this.numDecrement(this.num),1000);
  }

  numDecrement(numRecieved : number){
    this.num--;
    if (this.num === 0){
      clearInterval(this.interval);
    }
  }

  
  goToOtp(){
    this.router.navigate(['/homescreen'])
  }

}
