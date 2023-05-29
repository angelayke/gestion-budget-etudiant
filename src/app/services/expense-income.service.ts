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
}
