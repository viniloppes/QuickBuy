
import { Local } from 'protractor/built/driverProviders';
import { Produto } from '../../model/produto';

export class CarrinhoCompras  {
  public arrayProduto: Produto[] = [];

 

  public adicionar(produto: Produto) {
    var produtoLocaStorage = localStorage.getItem("produtoLocalStorage");
    if (!produtoLocaStorage) {
      // se nao existir nada dentro do localStorage
      this.arrayProduto.push(produto);
    } else {
      // se ja existir pelo menos um unico item armazenado na sessao(localLocalStorage)
      this.arrayProduto = JSON.parse(produtoLocaStorage);
      this.arrayProduto.push(produto);
    }

    localStorage.setItem("produtoLocalStorage", JSON.stringify(this.arrayProduto));
  }

  public obterProdutos(): Produto[] {
    var produtoLocaStorage = localStorage.getItem("produtoLocalStorage");
    if (produtoLocaStorage)
      return JSON.parse(produtoLocaStorage);
    return this.arrayProduto;
  }

  public removerProduto(produto: Produto) {
    var produtoLocaStorage = localStorage.getItem("produtoLocalStorage");
    if (produtoLocaStorage) {
      this.arrayProduto = JSON.parse(produtoLocaStorage);
      this.arrayProduto = this.arrayProduto.filter(p => p.id != produto.id);
      localStorage.setItem("produtoLocalStorage", JSON.stringify(this.arrayProduto));
    }
  }
  public atualizar(produtos: Produto[]) {
    localStorage.setItem("produtoLocalStorage", JSON.stringify(produtos));
  }

}
