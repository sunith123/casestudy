import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbookeddetailsComponent } from './userbookeddetails.component';

describe('UserbookeddetailsComponent', () => {
  let component: UserbookeddetailsComponent;
  let fixture: ComponentFixture<UserbookeddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbookeddetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbookeddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
