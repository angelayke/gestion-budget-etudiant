import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private userToken: string | null = null;

  constructor(private readonly tokenService: TokenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.$token.subscribe(token => this.userToken = token);
    let req = request;

    if (this.userToken) {
      req = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${this.userToken}`)
      });
    }

    return next.handle(req);
  }
}
