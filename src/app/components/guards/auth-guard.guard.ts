import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/security/authentication.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (sessionStorage.getItem('tk')) {
      return this.authenticationService.secureRoute(state.url);
    } else {
      this.router.navigate(['/log-in']);
      return false;
    }
  }

}
