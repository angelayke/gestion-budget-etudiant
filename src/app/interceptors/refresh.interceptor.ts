import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { app } from 'src/constants/app.constants';

@Injectable()
export class RefreshInterceptor implements HttpInterceptor {

  constructor(private readonly authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.status === app.http.codes.unauthorized && (
            request.url === app.http.auth.login ||
            request.url === app.http.auth.register ||
            request.url === app.http.auth.refresh
          )) {
            this.authService.refreshToken();
          }
        }
        return event;
      })
    );
  }
}
