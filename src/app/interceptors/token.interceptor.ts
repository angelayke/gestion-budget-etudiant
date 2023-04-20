import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenInjectorService } from '../services/token-injector.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private readonly tokenInjector: TokenInjectorService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let req = request;
    req = this.tokenInjector.injectToken(request);

    return next.handle(req);
  }
}
