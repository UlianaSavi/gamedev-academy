import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CookieService } from "../services/cookie.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private cookieService: CookieService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (state.url !== '/login' && !this.cookieService.hasCookie()) {
      this.router.navigate(['login']);
      return false;
    }
    if (state.url === '/login' && this.cookieService.hasCookie()) {
      this.router.navigate(['dashboard']);
      return false;
    }
    return true;
  }
}
