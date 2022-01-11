import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbookeddataComponent } from './userbookeddata.component';

describe('UserbookeddataComponent', () => {
  let component: UserbookeddataComponent;
  let fixture: ComponentFixture<UserbookeddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbookeddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbookeddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
