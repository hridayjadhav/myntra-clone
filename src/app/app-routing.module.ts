import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { HomescreenComponent } from './homescreen/homescreen.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},    // if there is nothing in 4200 so it will  auto redirect to login.
  {path:'login', component: LoginComponent},
  {path:'otp/:mobileNo', component: OtpComponent},
  {path:'homescreen', component: HomescreenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
