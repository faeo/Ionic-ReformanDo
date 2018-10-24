import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  public feeds: Array<string>;
  public usuario:string = '';
  private url: string = "http://localhost/WebService_ReformanDo/api/?acao=";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    let id = navParams.get('id');
    console.log(id);

    this.http.get(this.url + 'listarUsuariosPorId&id=' + id)
    .map(res => res.json())
      .subscribe(data => {
        this.feeds = data.Usuarios;
        //console.log(data);
      }); 

      this.getUsuario();

  }

  getUsuario(){

    this.http.get(this.url).map(res => res.json())
    .subscribe(data => {
      this.usuario = data.Usuarios[0];
      console.log(data);
    }); 
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  irParaHome(){
    this.navCtrl.push(HomePage), { id: this.usuario.indexOf };
  }

}
