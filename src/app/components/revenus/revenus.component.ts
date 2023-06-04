import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AppRouterService } from 'src/app/services/app-router.service';
import { Income } from 'src/app/interfaces/income.interface';
import { IncomeService } from 'src/app/services/income.service';
import { FormulaireRevenusComponent } from '../formulaire-revenus/formulaire-revenus.component';

@Component({
  selector: 'app-revenus',
  templateUrl: './revenus.component.html',
  styleUrls: ['./revenus.component.scss'],
})
export class RevenusComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['date', 'amount', 'actions'];

  dataSourceIncomes = new MatTableDataSource<Income>();

  incomes: Income[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private incomeService: IncomeService,
    private dialog: MatDialog,
    private routerService: AppRouterService
  ) {}

  ngOnInit(): void {
    this.getIncomes();
  }

  ngAfterViewInit() {
    this.dataSourceIncomes.paginator = this.paginator;
    this.dataSourceIncomes.sort = this.sort;
    this.dataSourceIncomes.paginator.firstPage();
  }

  getIncomes() {
    this.incomeService.getIncomes().subscribe((incomes) => {
      this.incomes = incomes;
      this.dataSourceIncomes.data = this.incomes;
      this.dataSourceIncomes = new MatTableDataSource(this.incomes);
      this.dataSourceIncomes.paginator = this.paginator;
      this.dataSourceIncomes.sort = this.sort;
      console.log(this.dataSourceIncomes.data);
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

  openIncomeDialog(income?: Income): void {
    const dialogRef = this.dialog.open(FormulaireRevenusComponent, {
      data: income,
      width: '800px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Le revenu a été ajouté:', result.income);
        this.getIncomes();
      } else {
        console.error(
          "Une erreur s'est produite lors du traitement du revenu."
        );
      }
    });
  }

  confirmDeleteIncome(incomeId: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: 'Êtes-vous sûr de vouloir supprimer ce revenu ?',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteIncome(incomeId);
      }
    });
  }

  deleteIncome(incomeId: string) {
    this.incomeService.deleteIncome(incomeId).subscribe(
      () => {
        console.log(
          `La dépense avec l'ID ${incomeId} a été supprimée avec succès.`
        );
        this.getIncomes();
      },
      (error) => {
        console.error(
          `Une erreur s'est produite lors de la suppression de la dépense avec l'ID ${incomeId}.`,
          error
        );
      }
    );
  }

  editIncome(id: string) {
    this.routerService.goToEditIncome(id);
  }
}
