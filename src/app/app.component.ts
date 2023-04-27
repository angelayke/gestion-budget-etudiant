import { Component } from '@angular/core';
import { ExpenseIncomeService } from './services/expense-income.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gestion-budget-etudiant';

  constructor(private expenseIncomeService: ExpenseIncomeService) {}


  ngOnInit() {
    this.expenseIncomeService.getExpensesIncomes().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
