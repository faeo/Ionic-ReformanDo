import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http, RequestOptions } from '@angular/http';

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

  private profissional;
  private http: Http;
	private alertCtrl: AlertController;
	private url: string = "http://localhost/projeto_webservice/api/?acao=";	
 
 
  /*logForm() {
    console.log(this.profissional)
  }*/

  constructor(public navCtrl: NavController, public navParams: NavParams, http: Http, alertCtrl: AlertController) {
    
    this.profissional = {};
    this.profissional.nome = '';
    this.profissional.apelido = '';
    this.profissional.cpf = '';
    this.profissional.endereco = '';
    this.profissional.bairro = '';
    this.profissional.cidade = '';
    this.profissional.telefone = '';
    this.profissional.profissao = '';
    
   

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

    let dados = {
      'nome': 'Teste123',
      'apelido': 'teste123',
      'cpf': '00100100111', 
      'endereco': 'rua javali',
      'bairro' : 'Santana',
      'cidade' : 'Tres coracoes',
      'telefone' : '32323232',
      'profissao' : 'pedreiro'
    };

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions ({headers: headers});

    this.http.post('http://localhost/ReformanDo/api/formularioProfissionais.php', dados, options);
    .map(res => res.json())
    .subscribe(data =>{
      console.log(data);
    });
   
  }

}
