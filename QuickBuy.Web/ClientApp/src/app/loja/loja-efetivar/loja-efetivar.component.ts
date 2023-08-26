import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemPedido } from '../../model/itemPedido';
import { Pedido } from '../../model/pedido';
import { Produto } from '../../model/produto';
import { PedidoServico } from '../../servicos/pedido/pedido.servico';
import { UsuarioServico } from '../../servicos/usuario/usuario.servico';
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

  constructor(private usuarioServico: UsuarioServico, private pedidoServico: PedidoServico, private router: Router) {

  }

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
    this.total = this.arrayProduto.reduce((acc, produto) => acc + produto.preco, 0);
  }

  public efetivarCompra() {
    let pedido = this.criarPedido();
    this.pedidoServico.efetivarCompra(pedido).subscribe(
      dado_json => {
        console.log(dado_json);
        sessionStorage.setItem("pedidoId", dado_json.toString())
        this.arrayProduto = [];
        this.carrinhoCompras.limparCarrinhoCompras();
        this.router.navigate(['/compra-realizada']);

      }, err => {
        console.log(err.error);
      });
  }

  public criarPedido(): Pedido {
    let pedido = new Pedido;
    pedido.usuarioId = this.usuarioServico.usuario.id;
    pedido.cep = "12312312";
    pedido.cidade = "São Paulo";
    //pedido.dataPedido = new Date();
    pedido.estado = "São Paulo";
    pedido.dataPrevisaoEntrega = new Date();
    pedido.formaPagamentoId = 1;
    pedido.numeroEndereco = "12";
    pedido.enderecoCompleto = "São Paulo-SP";
    this.arrayProduto = this.carrinhoCompras.obterProdutos();
    for (let produto of this.arrayProduto) {
      let itemPedido = new ItemPedido();
      itemPedido.ProdutoId = produto.id
      if (!produto.quantidade) {
        produto.quantidade = 1;
      }
      itemPedido.quantidade = produto.quantidade;
      pedido.itensPedido.push(itemPedido)
    }

    return pedido;
  }
}
