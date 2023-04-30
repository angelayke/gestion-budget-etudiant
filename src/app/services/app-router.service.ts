import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { appRoutes } from 'src/constants/app-routes.constants';

@Injectable({
  providedIn: 'root',
})
export class AppRouterService {
  constructor(private readonly router: Router) {}

  private routes = appRoutes;

  goToLogin() {
    this.router.navigate([this.routes.login]);
  }

  goToRegister() {
    this.router.navigate([this.routes.register]);
  }

  goToHome() {
    this.router.navigate([this.routes.home]);
  }

  goToMain() {
    this.router.navigate([this.routes.main]);
  }

  goToExpenses() {
    this.router.navigate([this.routes.expenses]);
  }

  goToExpense(id: string) {
    this.router.navigate([this.routes.expenses, id]);
  }

  goToIncomes() {
    this.router.navigate([this.routes.incomes]);
  }

  goToIncome(id: string) {
    this.router.navigate([this.routes.incomes, id]);
  }
}
