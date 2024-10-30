import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  private authorizationService: AuthorizationService;

  constructor(authorizationService: AuthorizationService) {
    this.authorizationService = authorizationService;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if(!this.authorizationService.isAuthorized()) {
      alert('You are not authorized to visit this page');
      return false;
    }
    return true;
  }
}
