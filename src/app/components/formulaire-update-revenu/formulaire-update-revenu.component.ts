import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Income } from 'src/app/interfaces/income.interface';
import { IncomeService } from 'src/app/services/income.service';
// import { Expense } from 'src/app/interfaces/expense.interface';
// import { ExpenseService } from 'src/app/services/expense.service';
import { UpdateExpenseDto } from 'src/dto/update-expense.dto';
import { UpdateIncomeDto } from 'src/dto/update-income.dto';

@Component({
  selector: 'app-formulaire-update-revenu',
  templateUrl: './formulaire-update-revenu.component.html',
  styleUrls: ['./formulaire-update-revenu.component.scss']
})
export class FormulaireUpdateRevenuComponent implements OnInit {

  public incomeId: string | null = null;
  public income: Income = {} as Income;
  incomeUpdateForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private incomeService: IncomeService
    ) { }
    

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((param) =>{
      this.incomeId = param.get('id')
      this.initUpdateForm();
      this.updateIncome();
    });



    if(this.incomeId){
      this.incomeService.getIncome(this.incomeId).subscribe((data)=>{
        this.income = data;
        console.log(this.income)
        this.initUpdateForm();

      });
    }
  }

  initUpdateForm(): void {
    this.incomeUpdateForm = this.formBuilder.group({
      amount: [this.income.amount, Validators.required],
      date: [this.income.date, Validators.required]
    });
  }

  updateIncome(): void {
    if (this.incomeUpdateForm && this.incomeUpdateForm.valid && this.incomeId) {
      const updatedIncome: Omit<UpdateIncomeDto, "user"> = {
        amount: this.incomeUpdateForm.value.amount,
        date: this.incomeUpdateForm.value.date
      };

      this.incomeService.updateIncome(this.incomeId, updatedIncome).subscribe(
        (response) => {
          console.log('Income updated successfully', response);
        },
        (error) => {
          console.error('Failed to update income', error);
        }
      );
    }
  }

}
