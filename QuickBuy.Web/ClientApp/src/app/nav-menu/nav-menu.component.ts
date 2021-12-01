import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {

  }
  public usuarioLogado(): boolean {
    //let autenticado = sessionStorage.getItem("auth");
    //if (autenticado == "1") {
    //  return true;
    //}
    //return false;
    return sessionStorage.getItem("auth") == "1";
  }

  Sair() {
    sessionStorage.setItem("auth", "-1")
    this.router.navigate(['/'])
  }
}
