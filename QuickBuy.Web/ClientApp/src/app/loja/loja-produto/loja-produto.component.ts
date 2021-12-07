import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../model/produto';
import { CarrinhoCompras } from '../carrinho-compras/carrinho-compras';

@Component({
  selector: 'app-loja-produto',
  templateUrl: './loja-produto.component.html',
  styleUrls: ['./loja-produto.component.css']
})
export class LojaProdutoComponent implements OnInit {
  public produto: Produto;
  public carrinhoCompras: CarrinhoCompras;
  constructor(private router: Router) { }

  ngOnInit() {
    this.carrinhoCompras = new CarrinhoCompras();
    var produtoDetalhe = sessionStorage.getItem('produtoDetalhe');
    if (produtoDetalhe) {
      this.produto = JSON.parse(produtoDetalhe);
    }
  }
  public comprar() {
    this.carrinhoCompras.adicionar(this.produto);
    this.router.navigate(['/loja-efetivar']);
  }
}
