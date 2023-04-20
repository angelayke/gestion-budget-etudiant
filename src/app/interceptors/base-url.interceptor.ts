import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { app } from 'src/constants/app.constants';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  private baseUrl = app.http.baseUrl;

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      url: new URL(request.url, this.baseUrl).toString()
    });

    return next.handle(request);
  }
}
