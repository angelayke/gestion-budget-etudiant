import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Income } from '../interfaces/income.interface';
import { AuthService } from './auth.service';
import { app } from 'src/constants/app.constants';
import { CreateExpenseDto } from 'src/dto/create-expense.dto';
import { UpdateExpenseDto } from 'src/dto/update-expense.dto';
import { CreateIncomeDto } from 'src/dto/create-income.dto';
import { UpdateIncomeDto } from 'src/dto/update-income.dto';


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

  addIncome(income: Omit<CreateIncomeDto, "user">): Observable<Income> {
    return this.http.post<Income>(`${this.urls.one}`, { ...income, user: this.userId });
  }

  updateIncome(incomeId: string, income: Omit<UpdateIncomeDto, "user">): Observable<Income> {
    return this.http.put<Income>(`${this.urls.one}/${incomeId}`, { ...income, user: this.userId });
  }

  deleteIncome(incomeId: string): Observable<Income> {
    return this.http.delete<Income>(`${this.urls.one}/${incomeId}`)

  }

}
