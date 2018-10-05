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

import { UsersProvider } from '../providers/users/users';
import { CreateAccountPageModule } from '../pages/create-account/create-account.module';
import { LoginPageModule } from '../pages/login/login.module';
import { UserDetailPageModule } from '../pages/user-detail/user-detail.module';
import { UserEditPageModule } from '../pages/user-edit/user-edit.module';
import { UserListPageModule } from '../pages/user-list/user-list.module';


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
    CreateAccountPageModule,
    LoginPageModule,
    UserDetailPageModule,
    UserEditPageModule,
    UserListPageModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider
  ]
})
export class AppModule {}
