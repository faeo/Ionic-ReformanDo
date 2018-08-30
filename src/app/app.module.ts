import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MinhasObrasPageModule } from '../pages/minhas-obras/minhas-obras.module';
import { ProcurarProfissionaisPageModule } from '../pages/procurar-profissionais/procurar-profissionais.module';
import { SouProfissionalPageModule } from '../pages/sou-profissional/sou-profissional.module';
import { NovasObrasPageModule } from '../pages/novas-obras/novas-obras.module';
import { LoginPageModule } from '../pages/login/login.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    MinhasObrasPageModule,
    ProcurarProfissionaisPageModule,
    SouProfissionalPageModule,
    NovasObrasPageModule,
    LoginPageModule,
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
