import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './Components/splash-screen/splash-screen.component';
import { LoginComponent } from './Components/login/login.component';
import { OtpComponent } from './Components/otp/otp.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { SendMoneyComponent } from './Components/send-money/send-money.component';

const routes: Routes = [
  {path:'',component: SplashScreenComponent},
  {path:'login',component: LoginComponent},
  {path:'otp',component: OtpComponent},
  {path:'landingPage',loadChildren:()=> import('../app/Components/landing-page/landing-page.module').then(m => m.LandingPageModule)},
  {path:'sendMoney', component : SendMoneyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
