import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class QueryParamGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const unidadNegocio = route.queryParams['unidadNegocio']; 

    if (unidadNegocio) {
      return true; 
    }

    this.router.navigate(['/error-page']);
    return false;
  }
}
