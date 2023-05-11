import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from '../../interfaces/expense.interface';
import { Income } from '../../interfaces/income.interface';
import { IncomeService } from 'src/app/services/income.service';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-depenses-mois-graphique',
  templateUrl: './depenses-mois-graphique.component.html',
  styleUrls: ['./depenses-mois-graphique.component.scss']
})
export class DepensesMoisGraphiqueComponent implements OnInit {

  expenses: Expense[] = [];
  income: Income[] = [];
  // currentDate!: Date;


  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };

  pieChartLabels: string[] = [];
  pieChartData: number[] = [];
  pieChartDatasets = [{
    data: this.pieChartData,
  }];


  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private expenseService: ExpenseService, private incomeService: IncomeService, private calendarService: CalendarService ) {

  }

  ngOnInit(): void {



    this.expenseService.getExpenses().subscribe(expenses => {
      this.expenses = expenses;
      this.incomeService.getIncomes().subscribe(income => {
        this.income = income;
        const monthlyExpenses = this.getMonthlyExpenses();
        const monthlyIncome = this.getMonthlyIncome();
        const labels = Object.keys(monthlyExpenses);
        const data = Object.values(monthlyExpenses);
        const incomeData = Object.values(monthlyIncome);
        this.pieChartLabels = labels;
        this.pieChartData = data;

      this.pieChartDatasets = [{
        data,
      },{
        data: incomeData,
      }];
    });
    });
  }
  getMonthlyExpenses(): Record<string, number> {
    const monthlyExpenses: Record<string, number> = {};
    this.expenses.forEach(expense => {
      const month = expense.date.toLocaleDateString('fr-CA', { month: 'long' });
      // const month = this.calendarService.addMonth(expense.date.getMonth());
      if (!monthlyExpenses[month]) {
        monthlyExpenses[month] = 0;
      }
      monthlyExpenses[month] += expense.amount;
    });
    return monthlyExpenses;
  }

  getMonthlyIncome(): Record<string, number> {
    const monthlyIncome: Record<string, number> = {};
    this.income.forEach(income => {
      const month = income.date.toLocaleDateString('fr-CA', { month: 'long' });
      // const month = this.calendarService.addMonth(income.date.getMonth())
      if (!monthlyIncome[month]) {
        monthlyIncome[month] = 0;
      }
      monthlyIncome[month] += income.amount;
    });
    return monthlyIncome;
  }







}
