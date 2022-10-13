import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SplashScreenComponent } from './Components/splash-screen/splash-screen.component';
import { LoginComponent } from './Components/login/login.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { OtpComponent } from './Components/otp/otp.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BottomNavbarComponent } from './Components/bottom-navbar/bottom-navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { HistoryComponent } from './Components/history/history.component';


import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';


// import {faUser,faQrcode,faBell,faQuestionCircle,faHouse,faBagShopping,faFileCircleCheck, faRupeeSign}from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { SendMoneyComponent } from './Components/send-money/send-money.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    LoginComponent,
    OtpComponent,
    LandingPageComponent,
    NavbarComponent,
    BottomNavbarComponent,
    HomeComponent,
    HistoryComponent,
    SendMoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    SwiperModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    // library.addIcons(faUser,faQrcode,faBell,faQuestionCircle,faHouse,faBagShopping,faFileCircleCheck,faRupeeSign);
    library.addIconPacks(fas, far);
  }
 }
