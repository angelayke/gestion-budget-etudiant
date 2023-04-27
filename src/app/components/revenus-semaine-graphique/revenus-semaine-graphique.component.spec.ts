import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenusSemaineGraphiqueComponent } from './revenus-semaine-graphique.component';

describe('RevenusSemaineGraphiqueComponent', () => {
  let component: RevenusSemaineGraphiqueComponent;
  let fixture: ComponentFixture<RevenusSemaineGraphiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenusSemaineGraphiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenusSemaineGraphiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
