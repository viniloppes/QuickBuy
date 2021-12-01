import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GuardaRotas implements CanActivate {
  constructor(private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let autenticado = sessionStorage.getItem("auth");

    if (autenticado == "1") {
      // se usuario autenticado
      return true;
    }
    //this.router.navigate(['/login']);
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })

    return false;

  }



}
