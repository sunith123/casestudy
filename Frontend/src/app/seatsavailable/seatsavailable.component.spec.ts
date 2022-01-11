import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsavailableComponent } from './seatsavailable.component';

describe('SeatsavailableComponent', () => {
  let component: SeatsavailableComponent;
  let fixture: ComponentFixture<SeatsavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatsavailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
