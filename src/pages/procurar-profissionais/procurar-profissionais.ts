import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalServicesVarsProvider } from '../../providers/global-services-vars/global-services-vars';
import { ListaProfissionaisPage } from '../lista-profissionais/lista-profissionais';


@IonicPage()
@Component({
  selector: 'page-procurar-profissionais',
  templateUrl: 'procurar-profissionais.html',
})
export class ProcurarProfissionaisPage {

  public feeds: Array<string>;
  private url: string;
  

  constructor(public navCtrl: NavController, public http: Http,  public globalSvsVars: GlobalServicesVarsProvider) {
    
    this.url = globalSvsVars.apiUrl;


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcurarProfissionaisPage');
  }

 
  procurarProfissionais(){
    this.navCtrl.push(ListaProfissionaisPage);
  }

  voltarParaHome(){
    this.navCtrl.push(HomePage);
  }
  


}
