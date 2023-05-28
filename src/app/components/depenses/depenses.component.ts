import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from '../../interfaces/expense.interface'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormulaireDepensesComponent } from '../formulaire-depenses/formulaire-depenses.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AppRouterService } from 'src/app/services/app-router.service';





@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.scss']
})

export class DepensesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['date', 'amount', 'actions'];

  dataSourceExpenses = new MatTableDataSource<Expense>();

  expenses: Expense[] = [];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;





  constructor(private _liveAnnouncer: LiveAnnouncer,
    private expenseService: ExpenseService,
    private dialog: MatDialog,
    private routerService: AppRouterService) {


   }

  ngOnInit(): void {
    this.getExpenses();
  }

  ngAfterViewInit() {
    this.dataSourceExpenses.paginator = this.paginator;
    this.dataSourceExpenses.sort = this.sort;
    this.dataSourceExpenses.paginator.firstPage();

  }

getExpenses(){
    this.expenseService.getExpenses().subscribe((expenses) => {
      this.expenses = expenses;
      this.dataSourceExpenses.data = this.expenses;
      this.dataSourceExpenses = new MatTableDataSource(this.expenses);
      this.dataSourceExpenses.paginator = this.paginator;
      this.dataSourceExpenses.sort = this.sort;
      console.log(this.dataSourceExpenses.data)

  });
}




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
      data: expense,
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('La dépense a été ajoutée:', result.expense);
        this.getExpenses();
      } else {
        console.error('Une erreur s\'est produite lors du traitement de la dépense.')
      }
    });
  }

  confirmDeleteExpense(expenseId: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: 'Êtes-vous sûr de vouloir supprimer cette dépense ?'
    });

    dialogRef.afterClosed().subscribe((result)=>{
      if(result) {
        this.deleteExpense(expenseId)
      }
    });
  }


  deleteExpense(expenseId: string) {
    this.expenseService.deleteExpense(expenseId).subscribe(()=> {
      console.log(`La dépense avec l'ID ${expenseId} a été supprimée avec succès.`);
      this.getExpenses();
    },
    (error)=> {
      console.error(`Une erreur s'est produite lors de la suppression de la dépense avec l'ID ${expenseId}.`,
       error
       );

    }
    );
  }

  editExpense(id: string) {
    this.routerService.goToEditExpense(id)
  }

}

