import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Operators } from '../interfaces/calculator.interface';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}

  private _operations: string[] = new Proxy([], {
    get: (target: string[], prop) => {
      if (prop === 'push') {
        return (value: string) => {
          target.push(value);
          this._displayValue.next(eval(target.join('')));
          this._secondDisplayValue.next(target.join(''));
        };
      }

      if (prop === 'pop') {
        return () => {
          target.slice(0, -1);
          this._displayValue.next(eval('0'));
          this._secondDisplayValue.next(target.join(''));
        };
      }

      return (target as any)[prop];
    },
    set: (target: string[], prop, value) => {
      if (prop === 'length') {
        target.length = value;
        this._displayValue.next('0');
        this._secondDisplayValue.next(' ');
        return true;
      }

      return false;
    },
  });

  private _displayValue = new BehaviorSubject('0');
  public displayValue$ = this._displayValue.asObservable();

  private _secondDisplayValue = new BehaviorSubject('');
  public secondDisplayValue$ = this._secondDisplayValue.asObservable();

  private operators: Operators = ['+', '-', '*', '/', '(', ')', '.', '%', '='];

  private isOperator(value: string): value is Operators[number] {
    return this.operators.includes(value as Operators[number]);
  }

  private checkValidity(a: number, b: number, op: Operators[number]): boolean {
    if (!this.isOperator(op)) return false;
    if (op === '/' && b === 0) return false;
    if (op === '/' && a === 0) return false;
    if (isNaN(a) || isNaN(b)) return false;

    return true;
  }

  clear(): void {
    this._operations.length = 0;
  }

  clearCurrent(): void {
    this._operations.pop();
  }

  calc(...args: string[]): void {
    args.forEach((arg) => this._operations.push(arg));
  }
}
