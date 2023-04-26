import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepensesMoisGraphiqueComponent } from './depenses-mois-graphique.component';

describe('DepensesMoisGraphiqueComponent', () => {
  let component: DepensesMoisGraphiqueComponent;
  let fixture: ComponentFixture<DepensesMoisGraphiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepensesMoisGraphiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepensesMoisGraphiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
