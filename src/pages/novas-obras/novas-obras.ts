import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { MinhasObrasPage } from '../minhas-obras/minhas-obras';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { GlobalServicesVarsProvider } from '../../providers/global-services-vars/global-services-vars';

@IonicPage()
@Component({
  selector: 'page-novas-obras',
  templateUrl: 'novas-obras.html',
})
export class NovasObrasPage {

  private dados;
	private http: Http;
	private alertCtrl: AlertController;
	private url: string;	


  constructor(public globalSvsVars: GlobalServicesVarsProvider, public navCtrl: NavController, public navParams: NavParams, http: Http, alertCtrl: AlertController) {

    this.dados = {};
        this.dados.nomeobra = '';
        this.dados.descricao = '';
        this.dados.localizacao = '';
        this.dados.tipoprofissional = '';
        this.dados.usuarios_idusuarios = 1;

        this.http = http;
				this.alertCtrl = alertCtrl;
				this.url = globalSvsVars.apiUrl;


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovasObrasPage');
  }

  voltarParaMinhasObras(){
    this.navCtrl.push(MinhasObrasPage);
  }

  cadastrarObra(){

    var headers = new Headers();
		headers.append("Accept", 'application/json');
		headers.append('Content-Type', 'application/json' );
		let options = new RequestOptions({ headers: headers });

		this.http.post(this.url + 'cadastrarObra', this.dados, options)
		.map(res => res.json())
		.subscribe(data => {
		  console.log(data);
		}, error => {
		  console.log(error);
		});

		console.log(this.dados);

		let alert = this.alertCtrl.create({
			title: 'Sua obra foi cadastrado com sucesso!',
			buttons: [
				{
			        text: 'OK',
			        role: 'ok',
			        handler: () => {
			          this.navCtrl.push(MinhasObrasPage)
			        }
		      	}
		    ]
			});
		alert.present();

	
    
  }

  

}
