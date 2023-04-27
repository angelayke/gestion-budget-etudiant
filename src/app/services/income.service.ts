import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Income } from '../interfaces/income.interface';


@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private http: HttpClient) {}

  getIncomes(): Observable<Income[]> {
    return this.http.get<Income[]>(`/incomes`);
  }

  getIncome(id: string): Observable<Income> {
    return this.http.get<Income>(`/incomes/${id}`);
  }

}
