import { TestBed } from '@angular/core/testing';

import { DeleteflightService } from './deleteflight.service';

describe('DeleteflightService', () => {
  let service: DeleteflightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteflightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
