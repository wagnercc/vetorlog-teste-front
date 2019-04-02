import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { Equivalencia, DadosGeracao } from '../models/index';

import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-equivalencias',
  templateUrl: './carousel-equivalencias.component.html',
  styleUrls: ['./carousel-equivalencias.component.css']
})
export class CarouselEquivalenciasComponent implements OnInit {

  dadosGeracao: DadosGeracao [] = [];
  equivalencias: Equivalencia [] = [];
  
  constructor(
    private apiService: ApiService,
    private config: NgbCarouselConfig // Configuração da api de carousel no bootstrap
  ) { 
    config.interval = 1000;
    config.keyboard = false;
  }

  ngOnInit() {
    this.apiService.get()
    .subscribe(dados => {
      this.dadosGeracao[0] = dados;
      /**
        * Tratamento dos dados de "equivalencia" para o object do mapeado no model 
        * para ser utilizado no ngFor
        */   
      let keysDadosEquivalencias = Object.keys(this.dadosGeracao[0].equivalencias);
      for( var i = 0; i < keysDadosEquivalencias.length ; i++) {        
        this.equivalencias.push(this.dadosGeracao[0].equivalencias[i]);
      }
    }); 
  }
  ngOnDestroy(){
    /**
     * Para liberar a memoria utilizada com as variaveis
     */
    this.dadosGeracao = [];
    this.equivalencias = [];
  }

}
