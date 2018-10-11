import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { NovasObrasPage } from '../novas-obras/novas-obras';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ModalContentPage } from '../minhas-obras/modal';
import { ModalContentPageEditar } from '../minhas-obras/modal-editar';

import { GlobalServicesVarsProvider } from '../../providers/global-services-vars/global-services-vars';
import { Observable } from 'rx';


@IonicPage()
@Component({
  selector: 'page-minhas-obras',
  templateUrl: 'minhas-obras.html',
})
export class MinhasObrasPage {

  public feeds: Array<string>;
  private url: string;
  private alertCtrl: AlertController;

  constructor(public navCtrl: NavController,  public http: Http, public modalCtrl: ModalController, alertCtrl: AlertController, public globalSvsVars: GlobalServicesVarsProvider) {
    


    this.alertCtrl = alertCtrl;
    this.url = globalSvsVars.apiUrl;

    //Listar Obras
    this.http.get(this.url +'listarObras').map(res => res.json())
      .subscribe(data => {
        this.feeds = data.Obras;       
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinhasObrasPage');
  }

  voltarParaHome(){
    this.navCtrl.push(HomePage);
  }

  irParaNovasObras(){
    this.navCtrl.push(NovasObrasPage);
  }

  itemDetalhes(event, item) {
    let modal = this.modalCtrl.create(ModalContentPage, item);
    modal.present();
  }

  editarItem(event, item){

    let index = this.feeds.indexOf(item);
    let modal = this.modalCtrl.create(ModalContentPageEditar, item);
    modal.present();
    modal.onDidDismiss(dados=>{
      if(index > -1){
        this.feeds[index] = dados;
      }  
      //console.log("Data =>", item)
    });

  }

  deletarItem(event, item){
 
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
                
                let index = this.feeds.indexOf(item);
 
                if(index > -1){
                    this.feeds.splice(index, 1);
                }

                this.http.get(this.url + 'excluirObraPorId&idobra=' + item.idobras)
                .map(res => res.json())
                .subscribe(data => {
                  console.log(data);
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
