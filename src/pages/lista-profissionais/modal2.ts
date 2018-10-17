import { Component } from '@angular/core';
import { NavParams, Platform, ViewController, AlertController, NavController, ModalController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { GlobalServicesVarsProvider } from '../../providers/global-services-vars/global-services-vars';
import { ProcurarProfissionaisPage } from '../procurar-profissionais/procurar-profissionais';


@Component({
  selector: 'modal-detalhes',
  templateUrl: 'modal-detalhes.html',
})
export class ModalContentPage2 {
  private item;
  private url: string; 
  private alertCtrl: AlertController;
  


  constructor(public navCtrl: NavController, public platform: Platform, public params: NavParams, public viewCtrl: ViewController, public http: Http, alertCtrl: AlertController, public globalSvsVars: GlobalServicesVarsProvider, public modalCtrl: ModalController) {

    this.alertCtrl = alertCtrl;
    this.url = globalSvsVars.apiUrl;

    
    this.item = {};
    this.item.id = params.get('id');
    this.item.nome = params.get('nome');
    this.item.apelido = params.get('apelido');
    this.item.cpf = params.get('cpf');
    this.item.endereco = params.get('endereco');
    this.item.bairro = params.get('bairro');
    this.item.cidade = params.get('cidade');
    this.item.telefone = params.get('telefone');
    this.item.idprofissionais = params.get('idprofissionais');
    this.item.profissao = params.get('profissao');
    this.item.qualificacao = params.get('qualificacao');

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  avaliacao(){

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    var result = this.http.post(this.url + 'avaliarProfissionalPorId&id=' + this.item.id, this.item, options)
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });

    let alert = this.alertCtrl.create({
      title: 'Avaliação confirmada!',
      buttons: [
        {
              text: 'OK',
              role: 'ok',
              handler: () => {
                this.viewCtrl.dismiss(this.item);
                this.navCtrl.push( ProcurarProfissionaisPage );
              }
            }
        ]
      });
    alert.present();
  }

  

}

