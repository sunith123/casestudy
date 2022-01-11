import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddseatavailabilityComponent } from './addseatavailability.component';

describe('AddseatavailabilityComponent', () => {
  let component: AddseatavailabilityComponent;
  let fixture: ComponentFixture<AddseatavailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddseatavailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddseatavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
