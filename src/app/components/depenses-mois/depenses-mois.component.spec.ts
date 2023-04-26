import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepensesMoisComponent } from './depenses-mois.component';

describe('DepensesMoisComponent', () => {
  let component: DepensesMoisComponent;
  let fixture: ComponentFixture<DepensesMoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepensesMoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepensesMoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
