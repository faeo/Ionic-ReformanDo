import { Component } from '@angular/core';
import { NavParams, Platform, ViewController, AlertController, NavController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { GlobalServicesVarsProvider } from '../../providers/global-services-vars/global-services-vars';
import { MinhasObrasPage } from './minhas-obras';
import { ModalContentPageEditar } from './modal-editar';


@Component({
  selector: 'modal-detalhes',
  templateUrl: 'modal-detalhes.html',
})
export class ModalContentPage {
  private item;

  private url: string;
  private alertCtrl: AlertController;

  constructor(public navCtrl: NavController, public platform: Platform, public params: NavParams, public viewCtrl: ViewController, public http: Http, alertCtrl: AlertController, public globalSvsVars: GlobalServicesVarsProvider, public modalCtrl: ModalController) {

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

  editarObra() {

    let index = this.item.id;
    let modal = this.modalCtrl.create(ModalContentPageEditar, this.item);
    modal.present();
    modal.onDidDismiss(dados => {
      if (index > -1) {
        this.item[index] = dados;
      }
      //console.log("Data =>", item)
    });

  }

  excluirObra() {

    let prompt = this.alertCtrl.create({
      title: 'Deseja excluir esta obra?',
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
                let alert = this.alertCtrl.create({
                  title: 'Sua obra foi excluida!',
                  buttons: [
                    {
                          text: 'OK',
                          role: 'ok',
                          handler: () => {
                            this.navCtrl.push(MinhasObrasPage);
                          }
                        }
                    ]
                  });
                alert.present();
              }, error => {
                console.log(error);
              });
            
          }
        }
      ]
    });

    prompt.present();
   
     
    }

}

//http://localhost/WebService_ReformanDo/api/?acao=excluirObraPorId&idobras=4