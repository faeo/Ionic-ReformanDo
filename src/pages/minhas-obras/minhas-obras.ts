import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { NovasObrasPage } from '../novas-obras/novas-obras';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ModalContentPage } from '../minhas-obras/modal';
import { GlobalServicesVarsProvider } from '../../providers/global-services-vars/global-services-vars';



@IonicPage()
@Component({
  selector: 'page-minhas-obras',
  templateUrl: 'minhas-obras.html',
})
export class MinhasObrasPage {

  public feeds: Array<string>;
  private url: string;
  private alertCtrl: AlertController;

  constructor(public navCtrl: NavController, public http: Http, public modalCtrl: ModalController, alertCtrl: AlertController, public globalSvsVars: GlobalServicesVarsProvider) {



    this.alertCtrl = alertCtrl;
    this.url = globalSvsVars.apiUrl;

    //Listar Obras
    this.http.get(this.url + 'listarObras').map(res => res.json())
      .subscribe(data => {
        this.feeds = data.Obras;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinhasObrasPage');
  }

  voltarParaHome() {
    this.navCtrl.push(HomePage);
  }

  irParaNovasObras() {
    this.navCtrl.push(NovasObrasPage);
  }

  itemDetalhes(event, item) {
    let modal = this.modalCtrl.create(ModalContentPage, item);
    modal.present();
  }

  
}
