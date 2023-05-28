import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDepensesComponent } from './formulaire-depenses.component';

describe('FormulaireDepensesComponent', () => {
  let component: FormulaireDepensesComponent;
  let fixture: ComponentFixture<FormulaireDepensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireDepensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireDepensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
