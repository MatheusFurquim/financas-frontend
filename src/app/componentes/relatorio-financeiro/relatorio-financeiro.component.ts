import { Component, OnInit } from '@angular/core';
import { RelatorioFinanceiro } from './relatorio-financeiro';
import { RelatorioFinanceiroService } from './relatorio-financeiro.service';

@Component({
  selector: 'app-relatorio-financeiro',
  templateUrl: './relatorio-financeiro.component.html',
  styleUrls: ['./relatorio-financeiro.component.css']
})
export class RelatorioFinanceiroComponent implements OnInit {

  relatorio: RelatorioFinanceiro[] = []

  constructor(private service: RelatorioFinanceiroService) {}

  ngOnInit(): void {
    this.service.gerarRelatorioFinanceiro().subscribe((relatorio) => {
      this.relatorio = relatorio
    })
  }

}
