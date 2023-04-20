import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';
import { app } from 'src/constants/app.constants';

@Injectable({
  providedIn: 'root',
  deps: [StorageService],
})
export class TokenService {
  constructor(private readonly storageService: StorageService) {
    const token = this.storageService.getItem<string>(this.key);
    if (token) {
      this._token.next(token);
    }
  }

  private readonly key = app.storage.auth.tokenKey;
  private _token = new BehaviorSubject<string | null>(null);
  $token = this._token.asObservable();

  updateToken(token: string | null) {
    if (!token) {
      this.storageService.removeItem(this.key);
      this._token.next(null);
      return;
    }

    this._token.next(token);
    this.storageService.setItem(this.key, token);
  }
}
