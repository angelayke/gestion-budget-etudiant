import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalculatriceComponent } from '../calculatrice/calculatrice.component';

@Component({
  selector: 'floating-calculator-button',
  templateUrl: './floating-calculator-button.component.html',
  styleUrls: ['./floating-calculator-button.component.scss'],
})
export class FloatingCalculatorButtonComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(CalculatriceComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
