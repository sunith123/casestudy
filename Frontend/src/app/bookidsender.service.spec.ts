import { TestBed } from '@angular/core/testing';

import { BookidsenderService } from './bookidsender.service';

describe('BookidsenderService', () => {
  let service: BookidsenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookidsenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
