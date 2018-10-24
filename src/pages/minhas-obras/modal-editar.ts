import { Component } from '@angular/core';
import {  NavParams, Platform, ViewController, AlertController, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { MinhasObrasPage } from './minhas-obras';

@Component({
  selector: 'modal-editar',
  templateUrl: 'modal-editar.html',
})
export class ModalContentPageEditar {
  private item;
  private http: Http;
  private alertCtrl: AlertController;
  private url: string = "http://localhost/WebService_ReformanDo/api/?acao=";

  constructor(public navCtrl: NavController, public platform: Platform, public params: NavParams, public viewCtrl: ViewController, http: Http, alertCtrl: AlertController){    
    this.item = {};
    this.item.id = params.get('id');
    this.item.nome = params.get('nome');
    this.item.descricao = params.get('descricao');
    this.item.localizacao = params.get('localizacao');
    this.item.profissional = params.get('profissional');

    this.http = http;
    this.alertCtrl = alertCtrl;
  }

  //Editar Obra
  formSubmit() {

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.url + 'editarObraPorId&idobras=' + this.item.id, this.item, options)
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });

    //console.log(this.item);

    let alert = this.alertCtrl.create({
      title: 'Obra alterada com sucesso!',
      buttons: [
        {
              text: 'OK',
              role: 'ok',
              handler: () => {
                this.viewCtrl.dismiss(this.item);
                this.navCtrl.push( MinhasObrasPage);
              }
            }
        ]
      });
    alert.present();

  }

  dismiss() {
    this.viewCtrl.dismiss(this.item);
  }

}
