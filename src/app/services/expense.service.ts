import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../interfaces/expense.interface';
import { AuthService } from './auth.service';
import { app } from 'src/constants/app.constants';
import { CreateExpenseDto } from 'src/dto/create-expense.dto';
import { UpdateExpenseDto } from 'src/dto/update-expense.dto';

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

  addExpense(expense: Omit<CreateExpenseDto, "user">): Observable<Expense> {
    return this.http.post<Expense>(`${this.urls.one}`, { ...expense, user: this.userId });
  }


  updateExpense(expenseId: string, expense: Omit<UpdateExpenseDto, "user">): Observable<Expense> {
    return this.http.put<Expense>(`${this.urls.one}/${expenseId}`, { ...expense, user: this.userId });
  }


  deleteExpense(expenseId: string): Observable<void> {
    return this.http.delete<void>(`${this.urls.one}/${expenseId}`)
  }

}
