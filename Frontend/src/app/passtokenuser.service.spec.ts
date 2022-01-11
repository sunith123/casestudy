import { TestBed } from '@angular/core/testing';

import { PasstokenuserService } from './passtokenuser.service';

describe('PasstokenuserService', () => {
  let service: PasstokenuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasstokenuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
