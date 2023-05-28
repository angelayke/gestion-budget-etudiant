import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepensesGraphiquesComponent } from './depenses-graphiques.component';

describe('DepensesGraphiquesComponent', () => {
  let component: DepensesGraphiquesComponent;
  let fixture: ComponentFixture<DepensesGraphiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepensesGraphiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepensesGraphiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
