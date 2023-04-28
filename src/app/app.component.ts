import { Component } from '@angular/core';
import { ExpenseIncomeService } from './services/expense-income.service';
import { FakeAuthService } from './services/fake-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gestion-budget-etudiant';

  constructor() {}

  ngOnInit() {}
}
