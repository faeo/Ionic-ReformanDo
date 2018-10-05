import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) {
    this.model = new User();
    this.model.nome = '';
    this.model.apelido = '';
    this.model.cpf = '';
    this.model.endereco = '';
    this.model.bairro = '';
    this.model.cidade = '';
    this.model.telefone = '';
    this.model.email = '';
    this.model.password = '';
  }

  createAccount() {
    this.userProvider.createAccount(this.model.nome, this.model.apelido, this.model.cpf, this.model.endereco, this.model.bairro, this.model.cidade, this.model.telefone, this.model.email, this.model.password)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário criado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();

        this.navCtrl.push(LoginPage);
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao criar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  voltarParaLogin(){
    this.navCtrl.push(LoginPage);
  }
}

export class User {
  email: string;
  password: string;
  nome: string;
  telefone: string;
  cidade: string;
  bairro: string;
  endereco: string;
  cpf: string;
  apelido: string;
}
