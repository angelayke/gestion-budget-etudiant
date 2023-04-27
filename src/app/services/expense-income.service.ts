import { Injectable } from '@angular/core';
import { IncomeService } from './income.service';
import { ExpenseService } from './expense.service';
import { Income } from '../interfaces/income.interface';
import { Expense } from '../interfaces/expense.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { FiltersService } from './filters.service';

@Injectable({
  providedIn: 'root',
})
export class ExpenseIncomeService {
  constructor(
    private readonly expenseService: ExpenseService,
    private readonly incomeService: IncomeService,
    private readonly filterService: FiltersService
  ) {}

  private items: BehaviorSubject<(Expense | Income)[]> = new BehaviorSubject<
    (Expense | Income)[]
  >([]);
  private items$: Observable<(Expense | Income)[]> = this.items.asObservable();

  private expensesIncomes: BehaviorSubject<(Expense | Income)[]> =
    new BehaviorSubject<(Expense | Income)[]>([]);
  public expensesIncomes$: Observable<(Expense | Income)[]> =
    this.expensesIncomes.asObservable();

  getAllIncomesExpenses() {
    this.expenseService.getExpenses().subscribe((data) => {
      const value = this.items.getValue().concat(data);
      this.items.next(value);
    });

    this.incomeService.getIncomes().subscribe((data) => {
      const value = this.items.getValue().concat(data);
      this.items.next(value);
    });

    this.items$.subscribe((data) => {
      const value = this.filterService.sortByDateDesc(data);
      this.expensesIncomes.next(value);
    });

    return this.expensesIncomes$;
  }

  // getExpensesIncomes(): Observable<(Expense|Income)[]> {
  //   return new Observable(observer => {
  //     const expenseObservable = this.expenseService.getExpenses();
  //     const incomeObservable = this.incomeService.getIncomes();

  //     let expenses: Expense[];
  //     let incomes: Income[];

  //     expenseObservable.subscribe(
  //       (data) => {
  //         console.log('Expenses received:', data);
  //         expenses = data;
  //         if(incomes) {
  //           const expensesIncomes = expenses.concat(incomes);
  //           expensesIncomes.sort((a, b) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime());
  //           console.log('Expense-Income:', expensesIncomes);
  //           observer.next(expensesIncomes);
  //           observer.complete();
  //         }
  //       },
  //       (error) => {
  //         console.error('Error fetching expenses:', error);
  //         observer.error(error);
  //       },
  //     );

  //         incomeObservable.subscribe(
  //           (data) => {
  //             console.log('Incomes received:', data);
  //             incomes = data;
  //             if(expenses) {
  //               const expensesIncomes = expenses.concat(incomes);
  //               expensesIncomes.sort((a, b) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime());
  //               console.log('Expense-Income:', expensesIncomes);
  //               observer.next(expensesIncomes);
  //               observer.complete();
  //             }
  //           },
  //           (error) => {
  //             console.error('Error fetching incomes:', error);
  //             observer.error(error);
  //           }

  //         );

  //   });
  // }
}
