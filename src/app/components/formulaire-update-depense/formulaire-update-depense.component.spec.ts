import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireUpdateDepenseComponent } from './formulaire-update-depense.component';

describe('FormulaireUpdateDepenseComponent', () => {
  let component: FormulaireUpdateDepenseComponent;
  let fixture: ComponentFixture<FormulaireUpdateDepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireUpdateDepenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireUpdateDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
