import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GlobalServicesVarsProvider {

	public apiUrl: string = "http://localhost/WebService_ReformanDo/api/?acao=";

	constructor(public http: Http) {
		//console.log('Hello GlobalServicesVarsProvider Provider');
	}

}