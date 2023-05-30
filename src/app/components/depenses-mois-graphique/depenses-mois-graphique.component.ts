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

    // Pie
    public pieChartOptions: ChartOptions<'pie'> = {
      responsive: false,
    };

    public pieChartLabels = [ [ '', '' ], [ '', '', '' ], '' ];

    pieChartDatasets = [{
        data: [ 300, 500, 100 ]

    }];

    public pieChartLegend = true;
    public pieChartPlugins = [];

    public pieChartData: number[] = [];

  constructor(private expenseService: ExpenseService,
    private calendarService: CalendarService) { }

  ngOnInit(): void {

    this.expenseService.getExpenses().subscribe((expenses: Expense[]) =>{

      const clampedExpenses = this.calendarService.clampDate(expenses);
      console.log(clampedExpenses)
      const amounts = clampedExpenses.map(expense => expense.amount);
      console.log("Les montants", amounts)

      this.pieChartData = amounts;

      this.pieChartDatasets = [{
        data: amounts

      }];

    });
  }

}
