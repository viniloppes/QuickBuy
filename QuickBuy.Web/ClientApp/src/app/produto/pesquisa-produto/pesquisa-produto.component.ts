import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../model/produto';
import { ProdutoServico } from '../../servicos/produto/produto.servico';

@Component({
  selector: 'app-pesquisa-produto',
  templateUrl: './pesquisa-produto.component.html',
  styleUrls: ['./pesquisa-produto.component.css']
})
export class PesquisaProdutoComponent implements OnInit {
  public produtos: Produto[] = []


  constructor(private produtoServico: ProdutoServico, private router: Router) {
    this.produtoServico.obterTodosProdutos().subscribe(
      dado_json => {
        this.produtos = dado_json;
      },
      err => {

      }
    )
  }

  ngOnInit() {

  }

  public adicionarProduto() {
    sessionStorage.setItem("editar-produto", "");

    this.router.navigate(['/cadastrar-produto'])
  }

  public deletarProduto(produto: Produto) {
    var retorno = confirm("Deseja realmente deletar o produto selecionado?");
    if (retorno == true) {
      this.produtoServico.deletar(produto).subscribe(
        dado_json => {
          this.produtos = dado_json;
        }, err => {
          console.log(err.error);
        }

      )
    }
  }

  public editarProduto(produto: Produto) {
    sessionStorage.setItem("editar-produto", JSON.stringify(produto))
    this.router.navigate(['/cadastrar-produto'], { queryParams: produto });
  }

}
