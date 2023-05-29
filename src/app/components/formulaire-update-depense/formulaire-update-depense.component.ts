import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Expense } from 'src/app/interfaces/expense.interface';
import { ExpenseService } from 'src/app/services/expense.service';
import { UpdateExpenseDto } from 'src/dto/update-expense.dto';


@Component({
  selector: 'app-formulaire-update-depense',
  templateUrl: './formulaire-update-depense.component.html',
  styleUrls: ['./formulaire-update-depense.component.scss']
})
export class FormulaireUpdateDepenseComponent implements OnInit {

  public expenseId: string | null = null;
  public expense: Expense = {} as Expense;
  expenseUpdateForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private expenseService: ExpenseService) { }


    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((param) =>{
        this.expenseId = param.get('id')
        this.initUpdateForm();
        this.updateExpense();
      });



      if(this.expenseId){
        this.expenseService.getExpense(this.expenseId).subscribe((data)=>{
          this.expense = data;
          console.log(this.expense)
          this.initUpdateForm();

        });
      }
    }

    initUpdateForm(): void {
      this.expenseUpdateForm = this.formBuilder.group({
        amount: [this.expense.amount, Validators.required],
        date: [this.expense.date, Validators.required]
      });
    }



    updateExpense(): void {
      if (this.expenseUpdateForm && this.expenseUpdateForm.valid && this.expenseId) {
        const updatedExpense: Omit<UpdateExpenseDto, "user"> = {
          amount: this.expenseUpdateForm.value.amount,
          date: this.expenseUpdateForm.value.date
        };

        this.expenseService.updateExpense(this.expenseId, updatedExpense).subscribe(
          (response) => {
            console.log('Expense updated successfully', response);
          },
          (error) => {
            console.error('Failed to update expense', error);
          }
        );
      }
    }

}
