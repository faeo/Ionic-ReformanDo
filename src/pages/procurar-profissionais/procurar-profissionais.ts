import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Keyboard } from 'ionic-angular'; // Keyboard btn_sair - Matheus Mestre
import { HomePage } from '../home/home';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public teclado: Keyboard) {
    this.teclado.onClose(this.closeCallback);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcurarProfissionaisPage');
  }

  voltarParaHome(){
    this.navCtrl.push(HomePage);
  }
  
  /* Quando teclado ativado add classe voltar-hidden ao footer */
  keyboardCheck() {
    if(this.teclado.isOpen()){
      document.getElementById('footer').classList.add("voltar-hidden");
    }
    else{
      document.getElementById('footer').classList.remove("voltar-hidden");
    }
  }

  closeCallback() {
    document.getElementById('footer').classList.remove("voltar-hidden");
  }
}
