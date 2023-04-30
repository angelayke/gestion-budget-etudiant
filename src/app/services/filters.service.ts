import { Injectable } from '@angular/core';
import { Expense } from '../interfaces/expense.interface';
import { Income } from '../interfaces/income.interface';
import { CalendarService } from './calendar.service';
import { UserConfigService } from './user-config.service';
import { BehaviorSubject } from 'rxjs';
import { DefaultSort } from '../interfaces/filters.interface';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  constructor(
    private readonly calendarService: CalendarService,
    private readonly userConfigService: UserConfigService
  ) {
    this.userConfigService.defaultSort$.subscribe((sort) => {
      this.defaultSort.next(sort);
    });
  }

  private defaultSort: BehaviorSubject<DefaultSort> =
    new BehaviorSubject<DefaultSort>('date:asc');

  sortByDateAsc(items: (Expense | Income)[]) {
    return this.clampDate(items).sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  sortByDateDesc(items: (Expense | Income)[]) {
    return this.clampDate(items).sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  clampDate(items: (Expense | Income)[]) {
    return this.calendarService.clampDate(items);
  }

  sortByAmountAsc(items: (Expense | Income)[]) {
    return this.clampDate(items).sort((a, b) => a.amount - b.amount);
  }

  sortByAmountDesc(items: (Expense | Income)[]) {
    return this.clampDate(items).sort((a, b) => b.amount - a.amount);
  }

  private canSort(url: URL) {
    return url.pathname.includes('/all') && !url.searchParams.has('sort');
  }

  addDefaultSort(url: URL) {
    if (this.canSort(url)) {
      url.searchParams.set('sort', this.defaultSort.value);
    }

    return url;
  }
}
