import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../interfaces/expense.interface';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(private http: HttpClient) {}

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`/expenses`);
  }

  getExpense(id: string): Observable<Expense> {
    return this.http.get<Expense>(`/expenses/${id}`);
  }
}
