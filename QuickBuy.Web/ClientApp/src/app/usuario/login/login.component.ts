import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { Usuario } from '../../model/usuario';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls:["./login.component.css"]
})
export class LoginComponent {
  public caminhoBuyPicture = "../../../assets/dados.jfif";
  public titulo : string = "Titulo adicionado no component"
  public usuario: Usuario;
  public strEmail: string;
  public strSenha: string;
  public usuarioAutenticado: boolean;
  public entrar_Onclick: boolean;


  constructor(private router: Router) {
    this.usuario = { id: 0, nome: "vinicius", sobreNome: "Lopes", senha: "abc123", email: "vini@gmail.com" };
    this.entrar_Onclick = false;
  }
  entrar() {
    this.entrar_Onclick = true;
    if (this.strEmail == this.usuario.email && this.strSenha == this.usuario.senha) {
      sessionStorage.setItem("auth", "1");
      this.usuarioAutenticado = true;
      this.router.navigate(['/']);
    }
  }


}
