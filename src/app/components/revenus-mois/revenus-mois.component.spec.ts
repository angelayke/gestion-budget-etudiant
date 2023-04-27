import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenusMoisComponent } from './revenus-mois.component';

describe('RevenusMoisComponent', () => {
  let component: RevenusMoisComponent;
  let fixture: ComponentFixture<RevenusMoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenusMoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenusMoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
