import { TestBed } from '@angular/core/testing';

import { PasstokenService } from './passtoken.service';

describe('PasstokenService', () => {
  let service: PasstokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasstokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
