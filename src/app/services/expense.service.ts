import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../interfaces/expense.interface';
import { AuthService } from './auth.service';
import { app } from 'src/constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService
  ) {}

  private userId = this.authService.userId;
  private urls = app.http.expenses;

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.urls.all}/${this.userId}`);
  }

  getExpense(id: string): Observable<Expense> {
    return this.http.get<Expense>(`${this.urls.one}/${id}`);
  }
}
