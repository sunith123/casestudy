import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsavaliableComponent } from './flightsavaliable.component';

describe('FlightsavaliableComponent', () => {
  let component: FlightsavaliableComponent;
  let fixture: ComponentFixture<FlightsavaliableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsavaliableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsavaliableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
