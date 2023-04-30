import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { appRoutes } from 'src/constants/app-routes.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
    this.authService.$isAuthenticated.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
      if (!isAuthenticated) {
        this.router.navigate([`/${appRoutes.login}`]);
      }
    });
  }

  private isAuthenticated: boolean = false;

  canActivate(): boolean {
    return this.isAuthenticated;
  }
}
