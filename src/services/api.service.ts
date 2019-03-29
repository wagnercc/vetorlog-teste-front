import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    
    return this.httpService.get(url, option);
    }
}