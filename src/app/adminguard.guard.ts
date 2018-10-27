import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';

@Injectable()
export class AdminguardGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let var_retorno = false;
            //validacion para saber si se inicio session o no
            if(sessionStorage.getItem('datos') == null){
              this.router.navigate(['login']);
              var_retorno = false;
          }else{

            let ver = JSON.parse(sessionStorage.getItem('datos'));
            if(ver.id_tp_usuario == 1){
              var_retorno = true;
            }
          }
              return var_retorno;
  }

}
