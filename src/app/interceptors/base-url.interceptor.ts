import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { app } from 'src/constants/app.constants';
import { FiltersService } from '../services/filters.service';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  private baseUrl = app.http.baseUrl;

  constructor(private readonly filterService: FiltersService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const url = this.filterService.addDefaultSort(
      new URL(request.url, this.baseUrl)
    );

    request = request.clone({
      url: url.toString(),
    });

    return next.handle(request);
  }
}
