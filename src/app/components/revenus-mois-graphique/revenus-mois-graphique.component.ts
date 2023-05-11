import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Income } from 'src/app/interfaces/income.interface';
import { CalendarService } from 'src/app/services/calendar.service';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-revenus-mois-graphique',
  templateUrl: './revenus-mois-graphique.component.html',
  styleUrls: ['./revenus-mois-graphique.component.scss']
})
export class RevenusMoisGraphiqueComponent implements OnInit {
  incomes: Income[] = [];

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

  constructor(private incomeService: IncomeService, private calendarService: CalendarService ) {

  }


  ngOnInit(): void {
      this.incomeService.getIncomes().subscribe(incomes => {
        this.incomes = incomes;

        const monthlyIncome = this.getMonthlyIncome();
        const labels = Object.keys(monthlyIncome);
        const data = Object.values(monthlyIncome);
        const incomeData = Object.values(monthlyIncome);
        this.pieChartLabels = labels;
        this.pieChartData = data;

      this.pieChartDatasets = [{
        data: incomeData,
      }];

    });
  }


  getMonthlyIncome(): Record<string, number> {
    const monthlyIncome: Record<string, number> = {};
    this.incomes.forEach(income => {
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
