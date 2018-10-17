import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import { GlobalServicesVarsProvider } from '../../providers/global-services-vars/global-services-vars';
import { ProcurarProfissionaisPage } from '../procurar-profissionais/procurar-profissionais';
import { ModalContentPage2 } from './modal2';


@IonicPage()
@Component({
  selector: 'page-lista-profissionais',
  templateUrl: 'lista-profissionais.html',
  
})
export class ListaProfissionaisPage {

  public feeds: Array<string>;
  private url: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public modalCtrl: ModalController, public globalSvsVars: GlobalServicesVarsProvider) {

    this.url = globalSvsVars.apiUrl;

    //Listar Profissionais
    this.http.get(this.url + 'listarProfissionais').map(res => res.json())
      .subscribe(data => {
        this.feeds = data.Profissionais;
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaProfissionaisPage');
  }

  voltarParaProcurarProfissionais(){
    this.navCtrl.push(ProcurarProfissionaisPage);
  }

  profissionalDetalhes($event, item){
    let modal = this.modalCtrl.create(ModalContentPage2, item);
    modal.present();

  }

}
