import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebookedseatComponent } from './updatebookedseat.component';

describe('UpdatebookedseatComponent', () => {
  let component: UpdatebookedseatComponent;
  let fixture: ComponentFixture<UpdatebookedseatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebookedseatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebookedseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
