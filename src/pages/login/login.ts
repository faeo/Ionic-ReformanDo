import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public feeds: Array<string>;
  private url: string = "http://localhost/web_service/";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    
    this.http.get(this.url).map(res => res.json())
      .subscribe(data => {
        this.feeds = data.pessoas;
        //console.log(data);
      }); 
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logar(){
    
  }

  esqueceuSenha(){

  }

  criarConta(){

  }

}
