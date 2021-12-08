import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionTrendsComponent } from './resolution-trends.component';

describe('ResolutionTrendsComponent', () => {
  let component: ResolutionTrendsComponent;
  let fixture: ComponentFixture<ResolutionTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
