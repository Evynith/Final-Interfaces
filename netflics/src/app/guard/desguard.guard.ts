import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class DesguardGuard implements CanActivate {
  
  constructor(private login : LoginService ,private router: Router) {

  }

  redirect(flag: boolean): any {
    if (!flag){
      this.router.navigate(['/', 'home']);
    }
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      return LoginService.islogin();
  }
  
}
