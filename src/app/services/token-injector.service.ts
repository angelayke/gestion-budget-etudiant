import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TokenInjectorService {
  private userToken: string | null = null;

  constructor(private readonly tokenService: TokenService) {
    this.tokenService.$token.subscribe((token) => (this.userToken = token));
  }

  injectToken(request: HttpRequest<any>) {
    console.log('injectToken', this.userToken);
    const r = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${this.userToken}`),
    });

    console.log('injectToken', r);

    return r;
  }
}
