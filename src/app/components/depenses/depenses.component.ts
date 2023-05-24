import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ExpenseService } from 'src/app/services/expense.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormulaireDepensesComponent } from '../formulaire-depenses/formulaire-depenses.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

export interface Expense {
  date: string;
  amount: number;
}

const EXPENSE_DATA: Expense[] = [
  {date:'03-03-2023', amount: 368.00},
  {date:'15-02-2023', amount: 212.00},
  {date:'01-02-2023', amount: 455.00},
  {date:'16-01-2023', amount: 200.00},
  {date:'02-01-2023', amount: 375.00},
  {date:'17-12-2022', amount: 425.00},
  {date:'05-12-2022', amount: 305.00},
  {date:'15-11-2022', amount: 325.00},
  {date:'01-11-2022', amount: 300.00},
];

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.scss']
})

export class DepensesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['date', 'amount', 'actions'];
  dataSource = new MatTableDataSource<Expense>(EXPENSE_DATA);

  expenses: Expense[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _liveAnnouncer: LiveAnnouncer, private expenseService: ExpenseService, private dialog: MatDialog) {
    // this.dataSource = new MatTableDataSource()
   }

  ngOnInit(): void {
    // this.getExpense()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator.firstPage();

  }

// getExpense(){
//     this.expenseService.getExpenses().subscribe((expenses) => {
//       // this.expenses = expenses;
//       this.dataSource = new MatTableDataSource(this.expenses);
//       this.dataSource.paginator = this.paginator;
//       this.dataSource.sort = this.sort;
//       console.log(this.dataSource.data)

//   });
// }




  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openExpenseDialog(expense?: Expense): void {
    const dialogRef = this.dialog.open(FormulaireDepensesComponent, {
      data: expense ? {mode: 'edit', expense} : { mode: 'add' },
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.mode === 'add'){
        console.log('La dépense a été ajoutée:', result.expense);
        // this.getExpense();
      } else if (result && result.mode === 'edit') {
        console.log('La dépense a été modifiée', result.expense);
      } else {
        console.error('Une erreur s\'est produite lors du traitement de la dépense.')

      }

    });
  }

  confirmDeleteExpense(expenseId: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: 'Êtes-vous sûr de vouloir supprimer cette dépense ?'
    });

    dialogRef.afterClosed().subscribe((result)=>{
      if(result) {
        this.deleteExpense(expenseId)
      }
    })
  }


  deleteExpense(expenseId: string): void {
    this.expenseService.deleteExpense(expenseId).subscribe(()=>{
      console.log(`La dépense avec l'ID ${expenseId} a été supprimée avec succès.`);

    },
    (error)=>{
      console.error(`Une erreur s'est produite lors de la suppression de la dépense avec l'ID ${expenseId}.`, error )
    }
    )
  }

}
