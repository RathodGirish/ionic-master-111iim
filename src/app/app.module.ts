import { AuthService } from './../providers/auth-service';
import { CommonService } from './../providers/common-service';
import { APIService } from './../providers/api-service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
 
import { InterestApp } from './app.component';

@NgModule({
  declarations: [
    InterestApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(InterestApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    InterestApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    APIService,CommonService
  ]
})
export class AppModule {}