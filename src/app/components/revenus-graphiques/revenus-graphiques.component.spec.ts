import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenusGraphiquesComponent } from './revenus-graphiques.component';

describe('RevenusGraphiquesComponent', () => {
  let component: RevenusGraphiquesComponent;
  let fixture: ComponentFixture<RevenusGraphiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenusGraphiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenusGraphiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
