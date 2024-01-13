import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CookieService } from "../services/cookie.service";
import { Paths } from "../app-routing.module";

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
    if (state.url !== `/${Paths.login}` && !this.cookieService.hasCookie()) {
      this.router.navigate([Paths.login]);
      return false;
    }
    if (state.url === `/${Paths.login}` && this.cookieService.hasCookie()) {
      this.router.navigate([Paths.dashboard]);
      return false;
    }
    return true;
  }
}
