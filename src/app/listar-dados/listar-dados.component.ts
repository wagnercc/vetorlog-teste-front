import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/services/api.service';
import { DadosGeracao , GraficoGeracao } from '../models/index';

@Component({
  selector: 'app-listar-dados',
  templateUrl: './listar-dados.component.html',
  styleUrls: ['./listar-dados.component.css']
})
export class ListarDadosComponent implements OnInit {

  dadosGeracao: DadosGeracao [] = [];
  graficoGeracao: GraficoGeracao [] = [];

  constructor(
    private dadosService: ApiService
  ) { }

  ngOnInit() {
    this.dadosService.get()
        .subscribe(dados => {          
          this.dadosGeracao[0] = dados;         
          /**
           * Tratamento dos dados do graficoGeracao para o object do mapeado no model
           */           
          let valuesDadosGeracao = Object.values(this.dadosGeracao[0].graficoGeracao);
          let keysDadosGeracao = Object.keys(this.dadosGeracao[0].graficoGeracao);
          
          for( var i = 1; i < keysDadosGeracao.length; i++) {
            let _graficoGeracao = new GraficoGeracao();
            _graficoGeracao.indice = i;
            _graficoGeracao.data = keysDadosGeracao[i];
            _graficoGeracao.valorGeracao = valuesDadosGeracao[i];
            this.graficoGeracao.push(_graficoGeracao);            
          }
        });
  }
  ngOnDestroy(){
    /**
     * Para liberar a memoria utilizada com as variaveis
     */
    this.dadosGeracao = [];
    this.graficoGeracao = [];
  }
}
