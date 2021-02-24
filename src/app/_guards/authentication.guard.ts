import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Session } from '../_data_objects/data_objects';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  public constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    // Get current url
    let url: string = state.url;
    url = url.split('?')[0];

    if (url === '/' || url === '/register' || url === '/login') {
      return !this.checkLogin(url);
    }

    return this.checkLogin(url);

  }


  private checkLogin(url: string): boolean {
    if (this.authenticationService.isLoggedIn) {
      return true;
    }

    // TODO: check after new login method 
    // const session: Session = JSON.parse(this.cookieService.get('session'));
    const session: Session = null;

    // console.log(session);

    if (session === null) {
      if (url !== '/' && url !== '/login' && url !== '/register') {
        this.router.navigate(['/login']);
      }
      return false;
    }
    return false;
  }


}
