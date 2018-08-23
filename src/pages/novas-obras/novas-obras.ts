import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MinhasObrasPage } from '../minhas-obras/minhas-obras';

/**
 * Generated class for the NovasObrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novas-obras',
  templateUrl: 'novas-obras.html',
})
export class NovasObrasPage {

  obra = {}
  logForm() {
    console.log(this.obra)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovasObrasPage');
  }

  voltarParaMinhasObras(){
    this.navCtrl.push(MinhasObrasPage);
  }

  

}
