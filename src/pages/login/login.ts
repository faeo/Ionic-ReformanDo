import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
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
  public usuario: UsersProvider;

  constructor(public user: UsersProvider, alertCtrl: AlertController, http: Http, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public globalSvsVars: GlobalServicesVarsProvider) {

    this.url = globalSvsVars.apiUrl;
    this.http = http;
    this.alertCtrl = alertCtrl;
   
    this.model = {};
    this.model.email = '';
    this.model.senha = '';

    this.usuario = user;

    


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

    this.usuario.dados.email = this.model.email;

    let alert = this.alertCtrl.create({

      title: 'Login efetuado com sucesso!',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          handler: () => {
            
            this.navCtrl.push(IntroPage)

          }
        }
      ]
    });
    alert.present();


  }

  editarUser() {
    this.navCtrl.push(CreateAccountPage);
  }

  criarUser() {
    this.navCtrl.push(CreateAccountPage);
  }
}

