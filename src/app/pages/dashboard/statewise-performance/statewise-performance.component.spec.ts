import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatewisePerformanceComponent } from './statewise-performance.component';

describe('StatewisePerformanceComponent', () => {
  let component: StatewisePerformanceComponent;
  let fixture: ComponentFixture<StatewisePerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatewisePerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatewisePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
