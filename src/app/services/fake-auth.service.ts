import { Injectable, isDevMode } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FakeAuthService {
  constructor(private readonly authService: AuthService) {}

  async login() {
    if (!isDevMode()) return;

    return this.authService.login(environment.auth.defaultCredentials);
  }

  async logout() {
    if (!isDevMode()) return;

    return this.authService.logout();
  }
}
