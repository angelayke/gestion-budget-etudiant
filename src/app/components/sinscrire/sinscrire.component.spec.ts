import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinscrireComponent } from './sinscrire.component';

describe('SinscrireComponent', () => {
  let component: SinscrireComponent;
  let fixture: ComponentFixture<SinscrireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinscrireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinscrireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
