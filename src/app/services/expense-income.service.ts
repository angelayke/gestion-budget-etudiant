import { Injectable } from '@angular/core';
import { IncomeService } from './income.service';
import { ExpenseService } from './expense.service';
import { Income } from '../interfaces/income.interface';
import { Expense } from '../interfaces/expense.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseIncomeService {

  constructor(private expenseService: ExpenseService, private incomeService: IncomeService) { }

  getExpensesIncomes(): Observable<(Expense|Income)[]> {
    return new Observable(observer => {
      const expenseObservable = this.expenseService.getExpenses();
      const incomeObservable = this.incomeService.getIncomes();

      let expenses: Expense[];
      let incomes: Income[];

      expenseObservable.subscribe(
        (data) => {
          console.log('Expenses received:', data);
          expenses = data;
          if(incomes) {
            const expensesIncomes = expenses.concat(incomes);
            expensesIncomes.sort((a, b) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime());
            console.log('Expense-Income:', expensesIncomes);
            observer.next(expensesIncomes);
            observer.complete();
          }
        },
        (error) => {
          console.error('Error fetching expenses:', error);
          observer.error(error);
        },
      );

          incomeObservable.subscribe(
            (data) => {
              console.log('Incomes received:', data);
              incomes = data;
              if(expenses) {
                const expensesIncomes = expenses.concat(incomes);
                expensesIncomes.sort((a, b) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime());
                console.log('Expense-Income:', expensesIncomes);
                observer.next(expensesIncomes);
                observer.complete();
              }
            },
            (error) => {
              console.error('Error fetching incomes:', error);
              observer.error(error);
            }

          );

    });
  }
}

