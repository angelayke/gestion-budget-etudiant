import { Component, OnInit } from '@angular/core';
import { appRoutes } from 'src/constants/app-routes.constants';
import { MatDialog } from '@angular/material/dialog';
import { CalculatriceComponent } from '../calculatrice/calculatrice.component';


@Component({
  selector: 'floating-calculator-button',
  templateUrl: './floating-calculator-button.component.html',
  styleUrls: ['./floating-calculator-button.component.scss'],
})
export class FloatingCalculatorButtonComponent implements OnInit {
  constructor(public dialog: MatDialog) {
    openDialog() {
      const dialogRef = this.dialog.open();
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
   

  }

  ngOnInit(): void {}
}
