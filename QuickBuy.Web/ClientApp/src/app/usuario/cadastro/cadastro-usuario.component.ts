import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
  selector: "app-cadastro-usuario",
  templateUrl: "./cadastro-usuario.component.html",
  styleUrls: ["./cadastro-usuario.component.css"]
})
export class CadastroUsuarioComponent implements OnInit {
  public caminhoBuyPicture = "../../../assets/dados.jfif";
  public ativarSpinner: boolean;
  public mensagemStr: string = "";
  public usuarioCadastrado: boolean;

  public usuario: Usuario;

  constructor(private usuarioServico: UsuarioServico) {

  }
  ngOnInit(): void {
    this.usuario = new Usuario();
  }
  public cadastrar() {
    this.ativarSpinner = true;
    console.log(this.usuario);
    this.usuarioServico.cadastrarUsuario(this.usuario).subscribe(
      dado_json => {
        this.usuarioCadastrado = true;
        this.mensagemStr = "";
        this.ativarSpinner = false;
      },
      err => {
        this.usuarioCadastrado = false;
        this.mensagemStr = err.error;
        this.ativarSpinner = false;

      }
    )
  }

}
