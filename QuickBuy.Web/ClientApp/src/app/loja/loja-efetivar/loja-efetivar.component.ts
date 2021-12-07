import { Component, OnInit } from '@angular/core';
import { Produto } from '../../model/produto';
import { CarrinhoCompras } from '../carrinho-compras/carrinho-compras';

@Component({
  selector: 'app-loja-efetivar',
  templateUrl: './loja-efetivar.component.html',
  styleUrls: ['./loja-efetivar.component.css']
})
export class LojaEfetivarComponent implements OnInit {
  public carrinhoCompras: CarrinhoCompras;
  public arrayProduto: Produto[] = [];
  public total: number;

  ngOnInit() {
    this.carrinhoCompras = new CarrinhoCompras();
    this.arrayProduto = this.carrinhoCompras.obterProdutos();
    this.atualizarTotal();
  }
  //public atualizarPreco(produto: Produto, quantidade: number) {

  //  if (!produto.precoOriginal) {
  //    produto.precoOriginal = produto.preco;
  //  }
  //  if (quantidade <= 0) {
  //    quantidade = 1;
  //  }
  //  produto.preco = produto.preco * quantidade;
  //  this.carrinhoCompras.atualizar(this.arrayProduto);
  //}

  //public remover(produto: Produto) {
  //  this.carrinhoCompras.removerProduto(produto);
  //  this.arrayProduto = this.carrinhoCompras.obterProdutos();
  //}







  public atualizarPreco(produto: Produto, quantidade: number) {

    if (!produto.precoOriginal) {
      produto.precoOriginal = produto.preco;
    }
    if (quantidade <= 0) {
      quantidade = 1;
      produto.quantidade = quantidade;
    }

    produto.preco = produto.precoOriginal * quantidade;

    this.carrinhoCompras.atualizar(this.arrayProduto);
    this.atualizarTotal();
  }
  public remover(produto: Produto) {
    this.carrinhoCompras.removerProduto(produto);
    this.arrayProduto = this.carrinhoCompras.obterProdutos();
    this.atualizarTotal();

  }


  public atualizarTotal() {
    this.total = this.arrayProduto.reduce((acc,produto) => acc + produto.preco,0)
  }
}
