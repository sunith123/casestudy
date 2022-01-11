import { TestBed } from '@angular/core/testing';

import { FlightsavaliableService } from './flightsavaliable.service';

describe('FlightsavaliableService', () => {
  let service: FlightsavaliableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightsavaliableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
