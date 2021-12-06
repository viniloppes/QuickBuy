import { Component, OnInit } from '@angular/core';
import { Produto } from '../../model/produto';
import { ProdutoServico } from '../../servicos/produto/produto.servico';

@Component({
  selector: 'app-loja-pesquisa',
  templateUrl: './loja-pesquisa.component.html',
  styleUrls: ['./loja-pesquisa.component.css']
})
export class LojaPesquisaComponent implements OnInit {
  public arrayProdutos: Produto[] = [];

  constructor(private produtoServico: ProdutoServico) {
    produtoServico.obterTodosProdutos().subscribe(
      dado_json => {
        this.arrayProdutos = dado_json;
      }, err => {
        console.log(err.error);
      }
    )
  }

  ngOnInit() {

  }

}
