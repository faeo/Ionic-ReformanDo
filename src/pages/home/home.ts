import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MinhasObrasPage } from '../minhas-obras/minhas-obras';
import { ProcurarProfissionaisPage } from '../procurar-profissionais/procurar-profissionais';
import { SouProfissionalPage } from '../sou-profissional/sou-profissional';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public feeds: Array<string>;
  private url: string = "http://localhost/web_service/";
  public usuario:string = '';

  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get(this.url).map(res => res.json())
      .subscribe(data => {
        this.feeds = data.pessoas;
        //console.log(data);
      }); 

      this.getUsuario();

  }

  getUsuario(){
    let id = 1;
    this.http.get(this.url + '?id=' + id).map(res => res.json())
    .subscribe(data => {
      this.usuario = data.pessoas[0].nome;
      //console.log(data);
    }); 


  }

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
