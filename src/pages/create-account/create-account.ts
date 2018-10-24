import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RequestOptions, Headers, Http } from '@angular/http';
import { GlobalServicesVarsProvider } from '../../providers/global-services-vars/global-services-vars';

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  private model;
  private http: Http;
  private url: string;
  private alertCtrl: AlertController;

  constructor(public navCtrl: NavController, public navParams: NavParams, http: Http, alertCtrl: AlertController, public globalSvsVars: GlobalServicesVarsProvider) {

    this.model = {};
    this.model.nome = '';
    this.model.apelido = '';
    this.model.cpf = '';
    this.model.endereco = '';
    this.model.bairro = '';
    this.model.cidade = '';
    this.model.telefone = '';
    this.model.email = '';
    this.model.senha = '';

    this.url = globalSvsVars.apiUrl;
    this.http = http;
    this.alertCtrl = alertCtrl; 
  }

  criarConta() {

    var headers = new Headers();
		headers.append("Accept", 'application/json');
		headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url + 'cadastrarUsuario', this.model, options)
		.map(res => res.json())
		.subscribe(data => {
		  console.log(data);
		}, error => {
		  console.log(error);
    });
    
    console.log(this.model);

    let alert = this.alertCtrl.create({
			title: 'Usuario cadastrado com sucesso!',
			buttons: [
				{
			        text: 'OK',
			        role: 'ok',
			        handler: () => {
			          this.navCtrl.push(LoginPage)
			        }
		      	}
		    ]
			});
		alert.present();        
  }

  voltarParaLogin(){
    this.navCtrl.push(LoginPage);
  }
}
