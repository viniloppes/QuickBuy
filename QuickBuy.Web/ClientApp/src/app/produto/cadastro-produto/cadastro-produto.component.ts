import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'protractor';
import { Produto } from '../../model/produto';
import { ProdutoServico } from '../../servicos/produto/produto.servico';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {


  public produto: Produto;
  public arquivoSelecionado: File;
  public ativar_spinner: boolean;
  public mensagem: string = "";

  constructor(private produtoServico: ProdutoServico, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    var produtoSession = sessionStorage.getItem('editar-produto')
    if (produtoSession) {
      this.produto = JSON.parse(produtoSession);
    } else {
      this.produto = new Produto();
    }
  }
  //ngOnInit() {
  //  var produtoSession = sessionStorage.getItem("editar-produto");

  //  if (produtoSession) {
  //    this.activatedRoute.queryParams.subscribe(params => {

  //      if (params != null) {
  //        this.produto = params;
  //      } else {
  //        this.produto = JSON.parse(produtoSession);
  //      }
  //    });
  //  } else {
  //    this.produto = new Produto();
  //  }

  //  //this.produto = new Produto();
  //  //var produtoSession = sessionStorage.getItem("editar-produto")
  //  //this.activatedRoute.queryParams.subscribe(params => {
  
  //  //  if (params != null) {
  //  //    //this.produto = params;
  //  //  } else {
  //  //    //this.produto = new Produto();
  //  //  }
  //  //});
  //}


  public cadastrar() {
    this.ativarEspera();
    this.produtoServico.cadastrar(this.produto).subscribe(
      dado_json => {
        console.log(dado_json);
        this.desativarEspera();
        this.router.navigate(['/pesquisar-produto']);
      },
      err => {
        this.desativarEspera();

        console.log(err.error);
        this.mensagem = err.error;
      }

    )
  }

  public inputChange(files: FileList) {
    this.ativar_spinner = true;
    this.arquivoSelecionado = files.item(0);
    this.produtoServico.enviarArquivo(this.arquivoSelecionado).subscribe(
      dado_json=> {
        this.produto.nomeArquivo = dado_json;
        console.log(dado_json);
        this.ativar_spinner = false;

      },
      err => {
        console.log(err.error);
      }
    )
  }

  public ativarEspera() {
    this.ativar_spinner = true;
  }



  public desativarEspera() {
    this.ativar_spinner = false;
  }

 

}
