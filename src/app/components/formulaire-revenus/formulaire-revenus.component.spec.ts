import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireRevenusComponent } from './formulaire-revenus.component';

describe('FormulaireRevenusComponent', () => {
  let component: FormulaireRevenusComponent;
  let fixture: ComponentFixture<FormulaireRevenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireRevenusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireRevenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
