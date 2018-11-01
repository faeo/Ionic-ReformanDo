import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { MinhasObrasPage } from '../minhas-obras/minhas-obras';
import { ProcurarProfissionaisPage } from '../procurar-profissionais/procurar-profissionais';
import { SouProfissionalPage } from '../sou-profissional/sou-profissional';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalServicesVarsProvider } from '../../providers/global-services-vars/global-services-vars';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public feeds: Array<string>;
  private url;

  constructor(public globalSvsVars: GlobalServicesVarsProvider, public navCtrl: NavController, public navParams: NavParams, public http: Http, public platform: Platform) {

    this.url = globalSvsVars.apiUrl;

    this.platform = platform;

    this.http.get(this.url + 'listarUsuarios')
      .map(res => res.json())
      .subscribe(data => {
        this.feeds = data.Usuarios;
      });



  }

 




  irParaMinhasObras() {

    this.navCtrl.push(MinhasObrasPage);

  }

  irParaProcurarProfissionais() {

    this.navCtrl.push(ProcurarProfissionaisPage);

  }

  irParaSouProfissional() {

    this.navCtrl.push(SouProfissionalPage);

  }

  logout() {

    this.navCtrl.push(LoginPage);
  }

}


















