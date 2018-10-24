import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HomePage } from '../home/home';

/**
 * Generated class for the SouProfissionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sou-profissional',
  templateUrl: 'sou-profissional.html',
})
export class SouProfissionalPage {

  private dados;
  private http: Http;
	private alertCtrl: AlertController;
	private url: string = "http://localhost/WebService_ReformanDo/api/?acao=";	
 

  constructor(public navCtrl: NavController, public navParams: NavParams, http: Http, alertCtrl: AlertController) {
    
    this.dados = {};
    this.dados.nome = '';
    this.dados.apelido = '';
    this.dados.cpf = '';
    this.dados.endereco = '';
    this.dados.bairro = '';
    this.dados.cidade = '';
    this.dados.telefone = '';
    this.dados.profissao = '';
    
   

    this.http = http;
    this.alertCtrl = alertCtrl; 
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SouProfissionalPage');
  }

  voltarParaHome(){
    this.navCtrl.push(HomePage);
  }

  souProfissional(){

    var headers = new Headers();
		headers.append("Accept", 'application/json');
		headers.append('Content-Type', 'application/json' );
		let options = new RequestOptions({ headers: headers });

    this.http.post(this.url + 'cadastrarProfissionais', this.dados, options)
		.map(res => res.json())
		.subscribe(data => {
		  console.log(data);
		}, error => {
		  console.log(error);
    });
    
    console.log(this.dados);

    let alert = this.alertCtrl.create({
			title: 'Profissional cadastrado com sucesso!',
			buttons: [
				{
			        text: 'OK',
			        role: 'ok',
			        handler: () => {
			          this.navCtrl.push(HomePage)
			        }
		      	}
		    ]
			});
		alert.present();

  }

}
