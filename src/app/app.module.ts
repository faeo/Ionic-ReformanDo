import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { GlobalServicesVarsProvider } from '../providers/global-services-vars/global-services-vars';
import { UsersProvider } from '../providers/users/users';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';

import { MinhasObrasPage } from '../pages/minhas-obras/minhas-obras';
import { NovasObrasPage } from '../pages/novas-obras/novas-obras';

import { ProcurarProfissionaisPage } from '../pages/procurar-profissionais/procurar-profissionais';
import { SouProfissionalPage } from '../pages/sou-profissional/sou-profissional';
import { ListaProfissionaisPage } from '../pages/lista-profissionais/lista-profissionais';

import { ModalContentPage } from '../pages/minhas-obras/modal';
import { ModalContentPage2 } from '../pages/lista-profissionais/modal2';
import { ModalContentPageEditar } from '../pages/minhas-obras/modal-editar';


import { CreateAccountPage } from '../pages/create-account/create-account';
import { LoginPage } from '../pages/login/login';
import { UserDetailPage } from '../pages/user-detail/user-detail';
import { UserEditPage } from '../pages/user-edit/user-edit';
import { UserListPage } from '../pages/user-list/user-list';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IntroPage,
    MinhasObrasPage,
    ProcurarProfissionaisPage,
    SouProfissionalPage,
    NovasObrasPage,
    CreateAccountPage,
    LoginPage,
    UserDetailPage,
    UserEditPage,
    UserListPage,
    ModalContentPage,
    ModalContentPageEditar,
    ListaProfissionaisPage,
    ModalContentPage2
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroPage,
    MinhasObrasPage,
    ProcurarProfissionaisPage,
    SouProfissionalPage,
    NovasObrasPage,
    CreateAccountPage,
    LoginPage,
    UserDetailPage,
    UserEditPage,
    UserListPage,
    ModalContentPage,
    ModalContentPageEditar,
    ListaProfissionaisPage,
    ModalContentPage2
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    GlobalServicesVarsProvider
  ]
})
export class AppModule {}
