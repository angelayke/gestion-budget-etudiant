import type { UserLogin } from "../interfaces/user-login.interface"

import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { app } from 'src/constants/app.constants';
import { BehaviorSubject } from "rxjs";
import { UserRegisterDto } from "src/dto/user.dto";
import { HttpError } from "../interfaces/http-error.interface";
import { LoginUserDto } from "src/dto/login-user.dto";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private readonly tokenService: TokenService,
    private readonly storageService: StorageService,
    private readonly http: HttpClient
  ) { }

  private readonly key = 'refresh_token';
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  $isAuthenticated = this._isAuthenticated.asObservable();

  login(loginUserDto: LoginUserDto) {
    this.http.post<UserLogin>(app.http.auth.login, loginUserDto).subscribe(res => {
      this.tokenService.updateToken(res.token);
      this.storageService.setItem(this.key, res.user.refresh_token);
      this._isAuthenticated.next(true);
    })
  }

  register(userRegisterDto: UserRegisterDto) {
    this.http.post<UserLogin>(app.http.auth.register, userRegisterDto).subscribe(res => {
      this.tokenService.updateToken(res.token);
      this.storageService.setItem(this.key, res.user.refresh_token);
      this._isAuthenticated.next(true);
    })
  }

  refreshToken() {
    const refreshToken = this.storageService.getItem(this.key);
    if (!refreshToken) {
      this.logout();
      return;
    }

    this.http.post<UserLogin | HttpError>(app.http.auth.refresh, { refresh_token: refreshToken }).subscribe(res => {
      if ("statusCode" in res) {
        this.logout();
        return;
      }

      this.tokenService.updateToken(res.token);
      this.storageService.setItem(this.key, res.user.refresh_token);
      this._isAuthenticated.next(true);
    })
  }

  logout() {
    this.tokenService.updateToken(null);
    this.storageService.removeItem(this.key);
    this._isAuthenticated.next(false);
  }
}
