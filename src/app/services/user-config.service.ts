import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { UserConfig } from '../interfaces/user-config';
import { HttpClient } from '@angular/common/http';
import { app } from 'src/constants/app.constants';
import { UserConfigDto } from 'src/dto/user-config.dto';
import { DefaultSort } from '../interfaces/filters.interface';

@Injectable({
  providedIn: 'root',
})
export class UserConfigService {
  constructor(
    private readonly authService: AuthService,
    private readonly http: HttpClient
  ) {
    this.authService.$isAuthenticated.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        const user = this.authService.userId;

        if (user) {
          this.getConfig(user).subscribe((config) => {
            this.defaultSort.next(config.defaultSort);
            this.defaultDateFilter.next(config.defaultDateFilter);
          });
        }
      }
    });
  }

  private urls = app.http.config;

  private defaultSort: BehaviorSubject<DefaultSort> =
    new BehaviorSubject<DefaultSort>('date:asc');
  private defaultDateFilter: BehaviorSubject<'month' | 'week'> =
    new BehaviorSubject<'month' | 'week'>('month');

  public defaultSort$ = this.defaultSort.asObservable();
  public defaultDateFilter$ = this.defaultDateFilter.asObservable();

  public setDefaultSort(sort: DefaultSort): void {
    this.defaultSort.next(sort);
    if (this.authService.userId) {
      this.updateConfig(this.authService.userId, { defaultSort: sort });
    }
  }

  public setDefaultDateFilter(filter: 'month' | 'week'): void {
    this.defaultDateFilter.next(filter);
    if (this.authService.userId) {
      this.updateConfig(this.authService.userId, { defaultDateFilter: filter });
    }
  }

  private getConfig(userId: string) {
    return this.http.get<UserConfig>(`${this.urls.one}/${userId}`);
  }

  private updateConfig(userId: string, config: UserConfigDto) {
    this.http.put<UserConfig>(`${this.urls.one}/${userId}`, config).subscribe();
  }
}
