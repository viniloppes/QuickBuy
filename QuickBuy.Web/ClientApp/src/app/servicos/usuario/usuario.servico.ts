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
  set usuario(usuario: Usuario) {
    //sessionStorage.setItem("usuAuth", JSON.stringify(usuario));
    this._usuario = usuario;
  }

  get usuario(): Usuario {
    //let usuario_json = sessionStorage.getItem("usuAuth");
    //this._usuario = JSON.parse(usuario_json);
    return this._usuario;
  }

  get header(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public usuario_autenticado(): boolean {
    return this._usuario != null && this._usuario.email != "" && this._usuario.senha != "";
  }

  public usuario_administrador(): boolean {
    return this.usuario_autenticado() && this.usuario.ehAdministrador;
  }
  public limpaSessao() {
    sessionStorage.setItem("usuAuth", "");
    this.usuario = null;

  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseURL = baseUrl;
  }
  public verificarUsuario(usuario: Usuario): Observable<Usuario> {
    //this.baseURL = raiz do site que pode ser exemplo.: http://wwww.quickbuy.com/
    return this.http.post<Usuario>(this.baseURL + "api/usuario/verificarUsuario", JSON.stringify(usuario), { headers: this.header });
  }

  public cadastrarUsuario(usuario: Usuario): Observable<Usuario> {

    //this.baseURL = raiz do site que pode ser exemplo.: http://wwww.quickbuy.com/
    return this.http.post<Usuario>(this.baseURL + "api/usuario/cadastrarUsuario", JSON.stringify(usuario), { headers: this.header });

  }
}
