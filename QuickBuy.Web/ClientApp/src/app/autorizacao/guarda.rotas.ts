import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioServico } from '../servicos/usuario/usuario.servico';


@Injectable({
  providedIn: 'root'
})
export class GuardaRotas implements CanActivate {
  constructor(private router: Router, private usuarioServico: UsuarioServico) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //this.usuario
    //let autenticado = sessionStorage.getItem("usuAuth");

    if (this.usuarioServico.usuario_autenticado()) {
      // se usuario autenticado
      return true;
    }
    //this.router.navigate(['/login']);
    //alert(state.url);
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })

    return false;

  }



}
