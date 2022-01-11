import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerslistComponent } from './passengerslist.component';

describe('PassengerslistComponent', () => {
  let component: PassengerslistComponent;
  let fixture: ComponentFixture<PassengerslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
