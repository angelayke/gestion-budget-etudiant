import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireUpdateRevenuComponent } from './formulaire-update-revenu.component';

describe('FormulaireUpdateRevenuComponent', () => {
  let component: FormulaireUpdateRevenuComponent;
  let fixture: ComponentFixture<FormulaireUpdateRevenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireUpdateRevenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireUpdateRevenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
