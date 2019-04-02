// Estrutura do objeto returnado pelo webservice na api.service

import { GraficoGeracao } from './graficoGeracao';
import { Equivalencia } from './equivalencia';

export class DadosGeracao {
    id: number;
    data: Date;
    geracaoDia: number;
    geracaoMes: number;
    geracaoTotal: number;
    gasCarbonico: number;
    arvoresPreservadas: number;
    economiaFatura: number;
    casasPopulares: number;

    graficoGeracao: GraficoGeracao = new GraficoGeracao();
    equivalencias: Equivalencia = new Equivalencia();
}