import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SouProfissionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sou-profissional',
  templateUrl: 'sou-profissional.html',
})
export class SouProfissionalPage {
  profissional = {}
  logForm() {
    console.log(this.profissional)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SouProfissionalPage');
  }

  voltarParaHome(){
    this.navCtrl.push(HomePage);
  }

}
