import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { testApplication } from './app.component';
//Providers
import { ProvidersModule } from '../providers/providers.module';


@NgModule({
  declarations: [
    testApplication,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(testApplication),
    ProvidersModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    testApplication,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
