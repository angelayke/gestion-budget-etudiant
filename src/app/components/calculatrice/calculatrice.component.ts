import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss'],
})
export class CalculatriceComponent implements OnInit {
  constructor(private readonly calculatorService: CalculatorService) {}

  display: string = '0';
  secondDisplay: string = ' ';

  clearValue: string = 'C';
  clearAllValue: string = 'AC';

  clearButtonValue: string = this.clearValue;
  isClearAll: boolean = false;
  pass: number = 0;

  operatorMap: { [key: string]: string } = {
    '+': '+',
    '-': '-',
    '%': '%',
    '÷': '/',
    '×': '*',
    '=': '=',
    '.': '.',
    '(': '(',
    ')': ')',
    C: 'C',
    AC: 'AC',
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
  };

  clear(): void {
    if (this.isClearAll) {
      this.calculatorService.clear();
      this.clearButtonValue = this.clearValue;
      this.isClearAll = false;
    } else {
      this.calculatorService.clearCurrent();
      this.clearButtonValue = this.clearAllValue;
      this.isClearAll = true;
    }
  }

  add(event: MouseEvent): void {
    const op = (event.target as HTMLButtonElement).textContent!;
    const value = this.operatorMap[op.trim()];

    if (!value) return;
    this.calculatorService.calc(value);
  }

  ngOnInit(): void {
    this.calculatorService.displayValue$.subscribe((value) => {
      this.display = value;
      if (this.pass > 0) {
        this.isClearAll = true;
        this.clearButtonValue = this.clearAllValue;
        this.pass--;
      } else {
        this.pass++;
      }
    });

    this.calculatorService.secondDisplayValue$.subscribe((value) => {
      if (!value) return;
      this.secondDisplay = value;
    });
  }
}
