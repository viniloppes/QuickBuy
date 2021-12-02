import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServico } from '../servicos/usuario/usuario.servico';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(private router: Router, private usuarioServico: UsuarioServico) {

  }
  public usuarioLogado(): boolean {
    //let autenticado = sessionStorage.getItem("auth");
    //if (autenticado == "1") {
    //  return true;
    //}
    //return false;
    return this.usuarioServico.usuario_autenticado();
  }

  Sair() {
    this.usuarioServico.limpaSessao();
    this.router.navigate(['/'])
  }
}
