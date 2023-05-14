import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from '../../interfaces/expense.interface'



// export interface Expense {
//   date: string;
//   amount: number;
// }

// const EXPENSE_DATA: Expense[] = [
//   {date:'03-03-2023', amount: 368.00},
//   {date:'15-02-2023', amount: 212.00},
//   {date:'01-02-2023', amount: 455.00},
//   {date:'16-01-2023', amount: 200.00},
//   {date:'02-01-2023', amount: 375.00},
//   {date:'17-12-2022', amount: 425.00},
//   {date:'05-12-2022', amount: 305.00},
//   {date:'15-11-2022', amount: 325.00},
//   {date:'01-11-2022', amount: 300.00},
// ];

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.scss']
})

export class DepensesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['date', 'amount', 'actions'];
  // dataSource = new MatTableDataSource<Expense>(EXPENSE_DATA);
  dataSourceExpenses = new MatTableDataSource<Expense>();

  expenses: Expense[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _liveAnnouncer: LiveAnnouncer, private expenseService: ExpenseService) {
    // this.dataSource = new MatTableDataSource()
   }

  ngOnInit(): void {
    this.getExpense()
  }

  ngAfterViewInit() {
    this.dataSourceExpenses.paginator = this.paginator;
    this.dataSourceExpenses.sort = this.sort;
    this.dataSourceExpenses.paginator.firstPage();

  }

getExpense(){
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

}
