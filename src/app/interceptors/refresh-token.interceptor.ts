import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TokenInjectorService } from '../services/token-injector.service';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenInjectorService: TokenInjectorService,
    private readonly http: HttpClient
  ) {}

  private _request: HttpRequest<unknown> | null = null;
  private _retryRequest: HttpRequest<unknown> | null = null;

  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hdGhpZXUudGhlcmlhdWx0ODlAbWUuY29tIiwiaWF0IjoxNjgxODY1NDQwLCJleHAiOjE2ODE4NjkwNDB9.rzuHcZdcaciVEjL0lhReirt-ON92apgOJ9afP4gWSQk"

  shouldRefreshToken(err: any, caugth: Observable<HttpEvent<any>>) {
    if (
      this._request &&
      !(
        this._request.url.includes('refresh') ||
        this._request.url.includes('login') ||
        this._request.url.includes('register')
      )
    ) {
      if (err.status === 401) {
        this._retryRequest = this._request;
        console.log('shouldRefreshToken', err, caugth);
        return true;
      }
    } else if (this._request && this._request.url.includes('refresh')) {
      console.log(this._retryRequest);
      this.retryRequest();
    }

    throw err;
  }

  tryRefreshToken(err: any, caugth: Observable<HttpEvent<any>>) {
    if (this.shouldRefreshToken(err, caugth)) {
      this._retryRequest = this._request;
      this.authService.refreshToken();

      return caugth;
    }

    throw err;
  }

  retryRequest() {
    console.log('retryRequest', this._retryRequest);
    if (this._retryRequest) {
      const request = this.tokenInjectorService.injectToken(this._retryRequest);
      console.log('retryRequest', request);
      return this.http.request(request);
    }

    return null;
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this._request = request;
    const handler = next.handle(request);
    return handler.pipe(catchError(this.tryRefreshToken.bind(this)));
  }
}
