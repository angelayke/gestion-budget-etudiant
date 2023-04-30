import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  date: string;
  montant: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date:'03-03-2023', montant: 368.00},
  {date:'15-02-2023', montant: 212.00},
  {date:'01-02-2023', montant: 455.00},
  {date:'16-01-2023', montant: 200.00},
  {date:'02-01-2023', montant: 375.00},
  {date:'17-12-2022', montant: 425.00},
  {date:'05-12-2022', montant: 305.00},
  {date:'15-11-2022', montant: 325.00},
  {date:'01-11-2022', montant: 300.00},
]; 

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.scss']
})

export class DepensesComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  displayedColumns: string[] = ['date', 'montant'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  // ngOnInit(): void {
  // }

}
