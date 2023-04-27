import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingCalculatorButtonComponent } from './floating-calculator-button.component';

describe('FloatingCalculatorButtonComponent', () => {
  let component: FloatingCalculatorButtonComponent;
  let fixture: ComponentFixture<FloatingCalculatorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingCalculatorButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingCalculatorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
