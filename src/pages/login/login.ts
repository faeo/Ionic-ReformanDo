import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { UserEditPage } from '../user-edit/user-edit';
import { CreateAccountPage } from '../create-account/create-account';
import { IntroPage } from '../intro/intro';
import { Http, RequestOptions, Headers } from '@angular/http';
import { GlobalServicesVarsProvider } from '../../providers/global-services-vars/global-services-vars';
import { UsersProvider } from '../../providers/users/users';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private model;
  private http: Http;
  private alertCtrl: AlertController;
  private url: string;

  constructor(public usuario: UsersProvider, alertCtrl: AlertController, http: Http, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public globalSvsVars: GlobalServicesVarsProvider) {

    this.url = globalSvsVars.apiUrl;
    this.http = http;
    this.alertCtrl = alertCtrl;
    this.model = {};
    this.model.email = '';
    this.model.senha = '';


  }

  logar() {

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url + 'logarApp', this.model, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });

    console.log(this.model);

    let alert = this.alertCtrl.create({

      title: 'Login efetuado com sucesso!',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          handler: () => {
            this.navCtrl.push(IntroPage, { id: this.model.pessoas_idpessoas })
            console.log('TESTE2', this.model.pessoas_idpessoas);
          }
        }
      ]
    });
    alert.present();


  }

  editarUser() {
    this.navCtrl.push(UserEditPage);
  }

  criarUser() {
    this.navCtrl.push(CreateAccountPage);
  }
}

