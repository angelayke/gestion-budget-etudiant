import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpStatusCode,
} from '@angular/common/http';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserLogin } from '../interfaces/user-login.interface';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === HttpStatusCode.Unauthorized) {
          return this.authService.refreshToken()!.pipe(
            switchMap((res) => {
              const newRequest = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${(res as UserLogin).token}`,
                },
              });
              return next.handle(newRequest);
            }),
            catchError((error) => {
              this.authService.logout();
              return throwError(() => new Error(error));
            })
          );
        } else {
          return throwError(() => new Error(error));
        }
      })
    );
  }
}
