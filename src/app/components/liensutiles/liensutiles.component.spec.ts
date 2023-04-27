import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiensutilesComponent } from './liensutiles.component';

describe('LiensutilesComponent', () => {
  let component: LiensutilesComponent;
  let fixture: ComponentFixture<LiensutilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiensutilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiensutilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
