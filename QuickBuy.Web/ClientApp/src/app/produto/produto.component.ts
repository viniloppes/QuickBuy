import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoServico } from '../servicos/produto/produto.servico';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  public produto: Produto;
  public arquivoSelecionado: File;
  public ativar_spinner: boolean;
  public mensagem: string = "";

  constructor(private produtoServico: ProdutoServico) { }

  ngOnInit() {
    this.produto = new Produto();
  }


  public cadastrar() {
    this.ativarEspera();
    this.produtoServico.cadastrar(this.produto).subscribe(
      dado_json => {
        console.log(dado_json);
        this.desativarEspera();
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
      nomeArquivo => {
        this.produto.nomeArquivo = nomeArquivo;
        console.log(nomeArquivo);
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
