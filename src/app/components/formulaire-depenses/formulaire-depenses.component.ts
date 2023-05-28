import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Expense } from 'src/app/interfaces/expense.interface';
import { ExpenseService } from 'src/app/services/expense.service';
import { CreateExpenseDto } from 'src/dto/create-expense.dto';


@Component({
  selector: 'app-formulaire-depenses',
  templateUrl: './formulaire-depenses.component.html',
  styleUrls: ['./formulaire-depenses.component.scss']
})
export class FormulaireDepensesComponent implements OnInit {

  expenseForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private expenseService: ExpenseService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();

  }

  initializeForm(): void {
     this.expenseForm = this.formBuilder.group({
      amount: ['', Validators.required],
      date: ['', Validators.required]
     });
  }

  addExpense(): void {
    if(this.expenseForm.valid){
      const expense: Omit<CreateExpenseDto, "user"> = {
        description: '',
        amount: this.expenseForm.value.amount,
        date: this.expenseForm.value.date,
        isRecurring: false
      };

      this.expenseService.addExpense(expense).subscribe((data) => {
        console.log(data)
        this.expenseForm.reset();
        this.router.navigate(['../expenses'])
      },
        error => {
          console.error(error);
        }
      );
    }
    }

  annuler(){
    this.expenseForm.reset()
  }

}
