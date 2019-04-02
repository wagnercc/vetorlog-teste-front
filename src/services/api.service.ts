import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, switchMap, catchError, mergeMap, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class ApiService {

    constructor(private httpService: HttpClient) { }

    /**
     * Metódo responsável pelo retorno dos dados arquimedes
     * 
     * @return `Observable` como provider do retorno dos dados
     * 
     * Utilizar o .subscribe para consumir os dados quando realizar a chamada deste método
     */  
    public get() {
    let url = "https://api.emeter.com.br:8443/emeter/api/v1/arquimedes/dados";

    const header = new HttpHeaders({
        'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': 'pt_BR',
      'Authorization': 'ZFF3NHc5V2dYY1E='
    });

    let option = {
        headers: header
    };
    
    ///return this.httpService.get(url, option);
    /**
     * log da estrutura do dado fornecida pelo webservice
     * essa estrutura foi utilizada como referencia para criar as classe no model
     */
    return  this.httpService.get(url, option)
                .pipe(
                  tap(console.log)
                );
  }
}