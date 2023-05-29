import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

export interface AmountElement {
  date: string;
  montant: number;
}

const ELEMENT_DATA: AmountElement[] = [
  { date: '03-03-2023', montant: 368.0 },
  { date: '15-02-2023', montant: 212.0 },
  { date: '01-02-2023', montant: 455.0 },
  { date: '16-01-2023', montant: 200.0 },
  { date: '02-01-2023', montant: 375.0 },
  { date: '17-12-2022', montant: 425.0 },
  { date: '05-12-2022', montant: 305.0 },
  { date: '15-11-2022', montant: 325.0 },
  { date: '01-11-2022', montant: 300.0 },
];

@Component({
  selector: 'app-revenus',
  templateUrl: './revenus.component.html',
  styleUrls: ['./revenus.component.scss'],
})
export class RevenusComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  displayedColumns: string[] = ['date', 'montant'];
  dataSource = new MatTableDataSource<AmountElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  //ngOnInit(): void {}

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
