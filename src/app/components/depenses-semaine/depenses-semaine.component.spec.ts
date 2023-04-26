import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepensesSemaineComponent } from './depenses-semaine.component';

describe('DepensesSemaineComponent', () => {
  let component: DepensesSemaineComponent;
  let fixture: ComponentFixture<DepensesSemaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepensesSemaineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepensesSemaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
