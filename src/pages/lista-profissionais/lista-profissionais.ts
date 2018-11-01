import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { GlobalServicesVarsProvider } from '../../providers/global-services-vars/global-services-vars';
import { ProcurarProfissionaisPage } from '../procurar-profissionais/procurar-profissionais';
import { ModalContentPage2 } from './modal2';



@IonicPage()
@Component({
  selector: 'page-lista-profissionais',
  templateUrl: 'lista-profissionais.html',
  
})
export class ListaProfissionaisPage {

  public feeds: Array<string>;
  private url: string;
  private http: Http;
  private alertCtrl: AlertController;
  private dados;
  private busca;
  constructor(http: Http, public globalSvsVars: GlobalServicesVarsProvider, public navCtrl: NavController, public navParams: NavParams, alertCtrl: AlertController, public modalCtrl: ModalController) {

		this.alertCtrl = alertCtrl;
    this.url = globalSvsVars.apiUrl;
    this.http = http;

    this.busca = navParams.get('parametro');


    if(this.busca == 'FALSE'){

       //Listar todos Profissionais
       this.http.get(this.url + 'listarProfissionais').map(res => res.json())
       .subscribe(data => {
         this.feeds = data.Profissionais;
       })  

    }
    else{

      this.dados={};

      this.dados.nome = this.busca.nome;
      this.dados.cidade = this.busca.cidade;
      this.dados.tipoprofissional = this.busca.tipoprofissional;
      this.dados.qualificacao = this.busca.qualificacao;

      this.buscar();
      
    }

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaProfissionaisPage');
  }

  buscar(){
    
    this.http.get(this.url + 'filtrarProfissionais&nome=' + this.dados.nome +
                             '&cidade=' + this.dados.cidade +
                             '&tipoprofissional=' + this.dados.tipoprofissional +
                             '&qualificacao=' + this.dados.qualificacao

                             //teste&nome=Faeo&qualificacao=0&tipoprofissional=%27%20%27&cidade=%27%20%27
    )
		.map(res => res.json())
		.subscribe(data => {
      

      if(data.Profissionais.length == 0){
        //PERGUNTAR PARA ALEXANDRE COMO PEGAR PARAMETRO VAZIO
        let alert = this.alertCtrl.create({
          title: 'Não foi possivel encontrar nenhum profissional!',
          buttons: [
            {
                  text: 'OK',
                  role: 'ok',
                  handler: () => {
                    this.navCtrl.push(ProcurarProfissionaisPage);
                  }
                }
            ]
          });
        alert.present();
      } 
      else{
        this.feeds = data.Profissionais;
      }

     
			console.log(data);
		}, error => {
      console.log(error);
      
    });

  }

  voltarParaProcurarProfissionais(){
    this.navCtrl.push(ProcurarProfissionaisPage);
  }

  profissionalDetalhes($event, item){
    let modal = this.modalCtrl.create(ModalContentPage2, item);
    modal.present();

  }

}
