import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { app } from 'src/constants/app.constants';
import { Expense } from '../interfaces/expense.interface';



@Injectable({
  providedIn: 'root'
})
export class ExpenseService  {

  constructor(private http:HttpClient, private authService: AuthService ) { }

  getExpenses(): Observable<Expense[]> {
          this.authService.$isAuthenticated;
           return this.http.get<Expense[]>(`${app.http}/expenses`);

  }

  getExpense(id: string): Observable<Expense> {
        this.authService.$isAuthenticated;
        return this.http.get<Expense>(`${app.http}/expenses/${id}`);
    }



}
