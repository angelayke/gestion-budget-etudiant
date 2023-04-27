import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepensesSemaineGraphiqueComponent } from './depenses-semaine-graphique.component';

describe('DepensesSemaineGraphiqueComponent', () => {
  let component: DepensesSemaineGraphiqueComponent;
  let fixture: ComponentFixture<DepensesSemaineGraphiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepensesSemaineGraphiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepensesSemaineGraphiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
