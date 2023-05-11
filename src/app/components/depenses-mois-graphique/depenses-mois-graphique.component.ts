import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Expense } from 'src/app/interfaces/expense.interface';
import { CalendarService } from 'src/app/services/calendar.service';
import { ExpenseService } from 'src/app/services/expense.service';


@Component({
  selector: 'app-depenses-mois-graphique',
  templateUrl: './depenses-mois-graphique.component.html',
  styleUrls: ['./depenses-mois-graphique.component.scss']
})
export class DepensesMoisGraphiqueComponent implements OnInit {

  expenses: Expense[] = [];

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

  constructor(private expenseService: ExpenseService, private calendarService: CalendarService ) {

  }


  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe(expenses => {

      this.expenses = expenses;
        const monthlyExpenses = this.getMonthlyExpenses();
        const labels = Object.keys(monthlyExpenses);
        const data = Object.values(monthlyExpenses);
        const expenseData = Object.values(monthlyExpenses);
        this.pieChartLabels = labels;
        this.pieChartData = data;

      this.pieChartDatasets = [{
        data: expenseData,
      }];
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



}
