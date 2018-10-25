import { Component } from '@angular/core';
import {  NavParams, Platform, ViewController, AlertController, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { LoginPage } from '../login/login';
import { GlobalServicesVarsProvider } from '../../providers/global-services-vars/global-services-vars';

@Component({
  selector: 'user-edit',
  templateUrl: 'user-edit.html',
})
export class UserEditPage {
  private item;
  private http: Http;
  private alertCtrl: AlertController;
  private url;

  constructor(public globalSvsVars: GlobalServicesVarsProvider, public navCtrl: NavController, public platform: Platform, public params: NavParams, public viewCtrl: ViewController, http: Http, alertCtrl: AlertController){    
    
    this.item = {};
    this.item.email = '';
    this.item.cpf = '';
    
  
    this.url = this.globalSvsVars.apiUrl;
    this.http = http;
    this.alertCtrl = alertCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserEditPage');
  }

  //Editar Usuario
  enviarEmail() {

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url + 'esqueciMinhaSenha&cpf=' + this.item.cpf, this.item, options)
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });

    //console.log(this.item);

    let alert = this.alertCtrl.create({
      title: 'Enviado com sucesso!',
      buttons: [
        {
              text: 'OK',
              role: 'ok',
              handler: () => {
                this.viewCtrl.dismiss(this.item);
                this.navCtrl.push( LoginPage);
              }
            }
        ]
      });
    alert.present();

  }

  voltarParaLogin(){
    this.navCtrl.push(LoginPage);
  }

}
