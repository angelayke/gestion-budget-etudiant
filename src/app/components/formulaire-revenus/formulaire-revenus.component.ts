import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Income } from 'src/app/interfaces/income.interface';
import { IncomeService } from 'src/app/services/income.service';
import { CreateIncomeDto } from 'src/dto/create-income.dto';


@Component({
  selector: 'app-formulaire-revenus',
  templateUrl: './formulaire-revenus.component.html',
  styleUrls: ['./formulaire-revenus.component.scss']
})
export class FormulaireRevenusComponent implements OnInit {

  incomeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private incomeService: IncomeService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.incomeForm = this.formBuilder.group({
     amount: ['', Validators.required],
     date: ['', Validators.required]
    });  
  }

  addIncome(): void {
    if(this.incomeForm.valid){
      const income: Omit<CreateIncomeDto, "user"> = {
        description: '',
        amount: this.incomeForm.value.amount,
        date: this.incomeForm.value.date,
        isRecurring: false
      };

      this.incomeService.addIncome(income).subscribe((data) => {
        console.log(data)
        this.incomeForm.reset();
        this.router.navigate(['../incomes'])
      },
        error => {
          console.error(error);
        }
      );
    }
    }


  annuler(){
    this.incomeForm.reset()
  }

}
