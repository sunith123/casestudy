import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookeddetailComponent } from './bookeddetail.component';

describe('BookeddetailComponent', () => {
  let component: BookeddetailComponent;
  let fixture: ComponentFixture<BookeddetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookeddetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookeddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
