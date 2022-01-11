import { TestBed } from '@angular/core/testing';

import { FlightdetailService } from './flightdetail.service';

describe('FlightdetailService', () => {
  let service: FlightdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
