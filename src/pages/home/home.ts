import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MinhasObrasPage } from '../minhas-obras/minhas-obras';
import { ProcurarProfissionaisPage } from '../procurar-profissionais/procurar-profissionais';
import { SouProfissionalPage } from '../sou-profissional/sou-profissional';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public feeds: Array<string>;
  private url: string = "http://localhost/WebService_ReformanDo/api/?acao=listarUsuarios";
  public usuario:string = '';

  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get(this.url).map(res => res.json())
      .subscribe(data => {
        this.feeds = data.Usuarios;
        //console.log(data);
      }); 

      this.getUsuario();

  }

  getUsuario(){
    this.http.get(this.url).map(res => res.json())
    .subscribe(data => {
      this.usuario = data.Usuarios[0];
      console.log(data);
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


















