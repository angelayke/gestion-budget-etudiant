import { TestBed } from '@angular/core/testing';

import { ExpenseIncomeService } from './expense-income.service';

describe('ExpenseIncomeService', () => {
  let service: ExpenseIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
