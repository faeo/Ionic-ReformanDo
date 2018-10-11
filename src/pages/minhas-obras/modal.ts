import { Component } from '@angular/core';
import { NavParams, Platform, ViewController } from 'ionic-angular';
//import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'modal-detalhes',
  templateUrl: 'modal-detalhes.html',
})
export class ModalContentPage {
  private item;

  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController){    
    this.item = {};
    this.item.idobras = params.get('idobras');
    this.item.nomeobra = params.get('nomeobra');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}