import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfuncComponent } from './adminfunc.component';

describe('AdminfuncComponent', () => {
  let component: AdminfuncComponent;
  let fixture: ComponentFixture<AdminfuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfuncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
