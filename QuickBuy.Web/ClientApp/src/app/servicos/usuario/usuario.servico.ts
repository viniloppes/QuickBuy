import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../model/usuario";



@Injectable({
  providedIn: "root", //Pode ser injetado em todo os outros componentes
})
export class UsuarioServico {
  private baseURL: string;
  private _usuario: Usuario;
  get usuario(): Usuario {
    let usuario_json = sessionStorage.getItem("usuAuth");
    this._usuario = JSON.parse(usuario_json);
    return this.usuario;
  }
  set usuario(usuario: Usuario) {
    sessionStorage.setItem("usuAuth", JSON.stringify(usuario));
    this._usuario = usuario;
  }

  public usuario_autenticado(): boolean {
    return this._usuario != null && this._usuario.email != "" && this._usuario.senha != "";
  }
  public limpaSessao() {
    sessionStorage.setItem("usuAuth", "");
    this.usuario = null;

  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseURL = baseUrl;
  }
  public verificarUsuario(usuario: Usuario): Observable<Usuario> {

    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      email: usuario.email,
      senha: usuario.senha
    }

    //this.baseURL = raiz do site que pode ser exemplo.: http://wwww.quickbuy.com/
    return this.http.post<Usuario>(this.baseURL + "api/usuario/verificarUsuario", body, { headers });
  }

  public cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      email: usuario.email,
      senha: usuario.senha,
      nome: usuario.nome,
      sobreNome: usuario.sobreNome,

    }

    //this.baseURL = raiz do site que pode ser exemplo.: http://wwww.quickbuy.com/
    return this.http.post<Usuario>(this.baseURL + "api/usuario/cadastrarUsuario", body, { headers });
  }
}
