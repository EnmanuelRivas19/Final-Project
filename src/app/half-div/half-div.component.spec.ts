import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfDivComponent } from './half-div.component';

describe('HalfDivComponent', () => {
  let component: HalfDivComponent;
  let fixture: ComponentFixture<HalfDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
