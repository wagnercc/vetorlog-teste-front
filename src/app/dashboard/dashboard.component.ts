import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  data: Array<any> 
  loading = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.get();
  }
  //Método para pegar os dados da API. Foi implementado o loading, com o objetivo de 
  //aparecer um ícone e a mensagem de carregando, enquanto espera o objetos 
  //vindos da API. MAS, ao tentar instalar os pacotes dos ícones tive sérios 
  //problemas. Então, só tem a mensagem rs
  get(){
    this.loading = true;
    this.apiService.get().subscribe(data => {
      this.data = data; //promises.... acredito eu
    },
    error => {console.log(error)},
    ()=>{
      this.loading = false
      console.log(this.loading)
    })
  }
}
