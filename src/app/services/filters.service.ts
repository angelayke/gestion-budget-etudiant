import { Injectable } from '@angular/core';
import { Expense } from '../interfaces/expense.interface';
import { Income } from '../interfaces/income.interface';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  constructor() {}

  sortByDateAsc(items: (Expense | Income)[]) {
    return items.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  sortByDateDesc(items: (Expense | Income)[]) {
    return items.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }
}
