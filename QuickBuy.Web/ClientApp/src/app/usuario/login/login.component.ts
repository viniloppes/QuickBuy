 import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { cwd } from 'process';
import { Usuario } from '../../model/usuario';
import { UsuarioServico } from '../../servicos/usuario/usuario.servico';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public caminhoBuyPicture = "../../../assets/dados.jfif";
  public titulo: string = "Titulo adicionado no component"
  public usuario: Usuario;
  public usuarioAutenticado: boolean;
  public entrar_Onclick: boolean;
  public returnUrl: string = "";
  public mensagemStr: string = "";
  public mensagem: boolean;
  public ativar_spinner: boolean;


  constructor(private router: Router, private activatedRouter: ActivatedRoute, private usuarioServico: UsuarioServico) {

  }
  ngOnInit(): void {
    this.entrar_Onclick = false;
    //this.usuario = { id: 0, nome: "vinicius", sobreNome: "Lopes", senha: "abc123", email: "vini@gmail.com" };
    this.usuario = new Usuario();
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    this.mensagem = false;
  }


  entrar() {
    this.ativar_spinner = true;
    //this.entrar_Onclick = true;
    //if (this.strEmail == this.usuario.email && this.strSenha == this.usuario.senha) {
    //  sessionStorage.setItem("auth", "1");
    //  this.usuarioAutenticado = true;
    //  this.router.navigate([this.returnUrl]);
    //}
    this.usuarioServico.verificarUsuario(this.usuario).subscribe(
      data => {
        //Essa linha será executada no caso de retorno sem erros
        //console.log(data);
        //var usuarioRetorno: Usuario;
        //usuarioRetorno = data;
        //sessionStorage.setItem("usuAuth", "1");
        //sessionStorage.setItem("email-usuario", usuarioRetorno.email);
        //alert(this.returnUrl);

        this.usuarioServico.usuario = data;
        //console.log(data);
        if (this.returnUrl == null) {
          this.router.navigate(['/']);
          this.ativar_spinner = false;

        } else {

          this.router.navigate([this.returnUrl]);
        }
      },
      err => {
        this.ativar_spinner = false;

        console.log(err.error);


        this.mensagemStr = err.error;
        this.mensagem = true;
      }
    )
  }


}
