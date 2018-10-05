import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserEditPage } from '../user-edit/user-edit';
import { CreateAccountPage } from '../create-account/create-account';
import { IntroPage } from '../intro/intro';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) {
    this.model = new User();
    this.model.email = '';
    this.model.password = '';
  }

  login() {
    this.userProvider.login(this.model.email, this.model.password)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário logado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();

        this.navCtrl.push(IntroPage);

      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  editarUser(){
    this.navCtrl.push(UserEditPage);
  }

  criarUser(){
    this.navCtrl.push(CreateAccountPage);
  }
}

export class User {
  email: string;
  password: string;
}
