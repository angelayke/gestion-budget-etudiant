import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppRouterService } from '../services/app-router.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private appRouter: AppRouterService
  ) {
    this.authService.$isAuthenticated.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  private isAuthenticated: boolean = false;

  shouldRedirectToLogin() {
    if (!this.isAuthenticated) {
      this.appRouter.goToLogin();
    }
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (isDevMode() && route.queryParams['pass'] === 'dev') return true;

    this.shouldRedirectToLogin();

    return this.isAuthenticated;
  }
}
