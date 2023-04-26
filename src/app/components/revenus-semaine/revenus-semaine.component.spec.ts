import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenusSemaineComponent } from './revenus-semaine.component';

describe('RevenusSemaineComponent', () => {
  let component: RevenusSemaineComponent;
  let fixture: ComponentFixture<RevenusSemaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenusSemaineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenusSemaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
