import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular'; // Keyboard btn_sair - Matheus Mestre
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ProcurarProfissionaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-procurar-profissionais',
  templateUrl: 'procurar-profissionais.html',
})
export class ProcurarProfissionaisPage {

  public feeds: Array<string>;
  private url: string = "http://localhost/ReformanDo/api/listarProfissionais.php";
  public profissionais:string = '';
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcurarProfissionaisPage');
  }

  procurarProfissionais(){
    this.http.get(this.url).map(res => res.json())
    .subscribe(data => {
      this.profissionais = data.Obras;
      //console.log(data);
    }); 
  }

  voltarParaHome(){
    this.navCtrl.push(HomePage);
  }
  


}
