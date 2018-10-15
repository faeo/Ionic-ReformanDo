import { Component } from '@angular/core';
import { NavParams, Platform, ViewController, AlertController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { GlobalServicesVarsProvider } from '../../providers/global-services-vars/global-services-vars';
import { MinhasObrasPage } from './minhas-obras';


@Component({
  selector: 'modal-detalhes',
  templateUrl: 'modal-detalhes.html',
})
export class ModalContentPage {
  private item;

  private url: string;
  private alertCtrl: AlertController;

  constructor(public navCtrl: NavController, public platform: Platform, public params: NavParams, public viewCtrl: ViewController, public http: Http, alertCtrl: AlertController, public globalSvsVars: GlobalServicesVarsProvider) {

    this.alertCtrl = alertCtrl;
    this.url = globalSvsVars.apiUrl;

    this.item = {};
    this.item.id = params.get('id');
    this.item.nome = params.get('nome');
    this.item.descricao = params.get('descricao');
    this.item.localizacao = params.get('localizacao');
    this.item.profissional = params.get('profissional');

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  excluir() {

    let prompt = this.alertCtrl.create({
      title: 'Deseja excluir esta obra?',
      inputs: [{
        name: 'title'
      }],
      buttons: [
        {
          text: 'Não'
        },
        {
          text: 'Sim',
          handler: data => {


            this.http.get(this.url + 'excluirObraPorId&idobras=' + this.item.id)
              .map(res => res.json())
              .subscribe(data => {
                console.log(data);
              }, error => {
                console.log(error);
              });
            
            this.navCtrl.push(MinhasObrasPage);

          }
        }
      ]
    });

    prompt.present();
     
    }

}

//http://localhost/WebService_ReformanDo/api/?acao=excluirObraPorId&idobras=4