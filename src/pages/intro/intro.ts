import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  irParaHome(){
    this.navCtrl.push(HomePage);
  }

}
