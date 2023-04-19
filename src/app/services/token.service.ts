import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
  deps: [StorageService]
})
export class TokenService {

  constructor(private readonly storageService: StorageService) { }

  private readonly key = 'token';
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
