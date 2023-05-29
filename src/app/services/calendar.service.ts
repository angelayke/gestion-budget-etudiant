import { Injectable } from '@angular/core';
import {
  addMonths,
  addWeeks,
  getMonth,
  getWeek,
  setMonth,
  setWeek,
} from 'date-fns';
import { Income } from '../interfaces/income.interface';
import { Expense } from '../interfaces/expense.interface';
import { BehaviorSubject } from 'rxjs';
import { UserConfigService } from './user-config.service';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private readonly userConfigService: UserConfigService) {
    this.userConfigService.defaultDateFilter$.subscribe((filter) => {
      if (filter === 'month') {
        this.mode.next('month');
      } else {
        this.mode.next('week');
      }
    });
  }

  private mode: BehaviorSubject<'month' | 'week'> = new BehaviorSubject<
    'month' | 'week'
  >('month');
  private mode$ = this.mode.asObservable();

  private now = new Date();
  private currentMonth = new BehaviorSubject(getMonth(this.now));
  private currentWeek = new BehaviorSubject(getWeek(this.now));

  addMonth(
    month?:
      | 'jan'
      | 'feb'
      | 'mar'
      | 'apr'
      | 'may'
      | 'jun'
      | 'jul'
      | 'aug'
      | 'sep'
      | 'oct'
      | 'nov'
      | 'dec'
  ): void;
  addMonth(month?: number): void;
  addMonth(month?: never): void {
    if (typeof month === 'string') {
      switch (month) {
        case 'jan':
          this.currentMonth.next(0);
          break;
        case 'feb':
          this.currentMonth.next(1);
          break;
        case 'mar':
          this.currentMonth.next(2);
          break;
        case 'apr':
          this.currentMonth.next(3);
          break;
        case 'may':
          this.currentMonth.next(4);
          break;
        case 'jun':
          this.currentMonth.next(5);
          break;
        case 'jul':
          this.currentMonth.next(6);
          break;
        case 'aug':
          this.currentMonth.next(7);
          break;
        case 'sep':
          this.currentMonth.next(8);
          break;
        case 'oct':
          this.currentMonth.next(9);
          break;
        case 'nov':
          this.currentMonth.next(10);
          break;
        case 'dec':
          this.currentMonth.next(11);
          break;
      }
    } else if (typeof month === 'number') {
      this.currentMonth.next(
        getMonth(addMonths(setMonth(this.now, this.currentMonth.value), month))
      );
    } else {
      this.currentMonth.next(
        getMonth(addMonths(setMonth(this.now, this.currentMonth.value), 1))
      );
    }
  }

  addWeek(week?: 'prev' | 'next'): void;
  addWeek(week?: number): void;
  addWeek(week?: never): void {
    if (typeof week === 'string') {
      switch (week) {
        case 'prev':
          this.currentWeek.next(
            getWeek(addWeeks(setWeek(this.now, this.currentWeek.value), -1))
          );
          break;
        case 'next':
          this.currentWeek.next(
            getWeek(addWeeks(setWeek(this.now, this.currentWeek.value), 1))
          );
          break;
      }
    } else if (typeof week === 'number') {
      this.currentWeek.next(
        getWeek(addWeeks(setWeek(this.now, this.currentWeek.value), week))
      );
    } else {
      this.currentWeek.next(
        getWeek(addWeeks(setWeek(this.now, this.currentWeek.value), 1))
      );
    }
  }

  private isInTimeRange(date: Date | string): boolean {
    let isInRange = false;

    this.mode$.subscribe((mode) => {
      if (typeof date === 'string') date = new Date(date);

      if (mode === 'month') {
        isInRange = getMonth(date) === this.currentMonth.value;
      } else {
        isInRange = getWeek(date) === this.currentWeek.value;
      }
    });

    return isInRange;
  }

  clampDate<T extends (Income | Expense)[]>(incomesOrExpenses: T): T {
    return incomesOrExpenses.filter((incomeOrExpense) =>
      this.isInTimeRange(incomeOrExpense.date)
    ) as T;
  }
}
