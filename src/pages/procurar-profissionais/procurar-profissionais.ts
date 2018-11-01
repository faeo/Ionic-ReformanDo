import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { HomePage } from '../home/home';
import 'rxjs/add/operator/map';
import { ListaProfissionaisPage } from '../lista-profissionais/lista-profissionais';

@IonicPage()
@Component({
  selector: 'page-procurar-profissionais',
  templateUrl: 'procurar-profissionais.html',
})
export class ProcurarProfissionaisPage {
  
  private dados;

  constructor(public navCtrl: NavController) {

    

    this.dados = {};
      this.dados.nome = '';
      this.dados.cidade = '';
      this.dados.tipoprofissional = '';
      this.dados.qualificacao = '';


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcurarProfissionaisPage');
  }

 
  procurarProfissionais(){

    if(this.dados.nome != '' ||
       this.dados.cidade != '' ||
       this.dados.tipoprofissional != '' ||
       this.dados.qualificacao != ''    
    ){
      
      this.navCtrl.push(ListaProfissionaisPage, {parametro: this.dados});  

    }

    else{
      this.navCtrl.push(ListaProfissionaisPage, {parametro: 'FALSE'});
    }

  }

  voltarParaHome(){
    this.navCtrl.push(HomePage);
  }
  


}
