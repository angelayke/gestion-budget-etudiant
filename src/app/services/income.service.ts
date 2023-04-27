import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Income } from '../interfaces/income.interface';
import { AuthService } from './auth.service';
import { app } from 'src/constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class IncomeService {
  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService
  ) {}

  private userId = this.authService.userId;
  private urls = app.http.incomes;

  getIncomes(): Observable<Income[]> {
    return this.http.get<Income[]>(`${this.urls.all}/${this.userId}`);
  }

  getIncome(id: string): Observable<Income> {
    return this.http.get<Income>(`${this.urls.one}/${id}`);
  }
}
