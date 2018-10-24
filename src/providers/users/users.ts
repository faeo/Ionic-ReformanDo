

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalServicesVarsProvider } from '../global-services-vars/global-services-vars';
 
@Injectable()
export class UsersProvider {
  
  private url: string;

  public usuario = {  
    email: '', senha:''
  };
 
  constructor(public http: Http, private globalSvsVars: GlobalServicesVarsProvider) {

    this.url = globalSvsVars.apiUrl;


   }
 
  createAccount(nome: string, apelido: string, cpf: string, endereco: string, bairro: string, cidade: string, telefone: string, email: string, senha: string) {
    
    
    return new Promise((resolve, reject) => {
      var data = {
        nome: nome,
        apelido: apelido,
        cpf: cpf,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        telefone: telefone,
        email: email,
        senha: senha,
      };
 
      this.http.post(this.url + 'cadastrarUsuario', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  login(usuario) {
    return new Promise((resolve, reject) => {
 
      this.http.post(this.url + 'login', usuario)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
} 

export class Usuario {
  id: number;
  email: string;
  senha: string;

}

