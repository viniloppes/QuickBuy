import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServico } from '../servicos/usuario/usuario.servico';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  //public usuario
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(private router: Router, private usuarioServico: UsuarioServico) {

  }
    ngOnInit(): void {
    }
  public usuarioLogado(): boolean {
    //let autenticado = sessionStorage.getItem("auth");
    //if (autenticado == "1") {
    //  return true;
    //}

    //return false;
    //this.usuario = usuRetorno;
    return this.usuarioServico.usuario_autenticado();
  }

  public usuario_administrador(): boolean {
    return this.usuarioServico.usuario_administrador();
  }

  Sair() {
    this.usuarioServico.limpaSessao();
    this.router.navigate(['/'])
  }

  get usuario() {
    return this.usuarioServico.usuario;
  }
}
