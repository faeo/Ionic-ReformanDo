import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MinhasObrasPage } from '../minhas-obras/minhas-obras';
import { ProcurarProfissionaisPage } from '../procurar-profissionais/procurar-profissionais';
import { SouProfissionalPage } from '../sou-profissional/sou-profissional';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public usuario:string = "Rafael do Prado Ferreira";

  irParaMinhasObras(){

    this.navCtrl.push(MinhasObrasPage);

  }

  irParaProcurarProfissionais(){

    this.navCtrl.push(ProcurarProfissionaisPage);

  }

  irParaSouProfissional(){

    this.navCtrl.push(SouProfissionalPage);

  }

}
