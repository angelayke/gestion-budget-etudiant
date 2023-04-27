import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenusMoisGraphiqueComponent } from './revenus-mois-graphique.component';

describe('RevenusMoisGraphiqueComponent', () => {
  let component: RevenusMoisGraphiqueComponent;
  let fixture: ComponentFixture<RevenusMoisGraphiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenusMoisGraphiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenusMoisGraphiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
