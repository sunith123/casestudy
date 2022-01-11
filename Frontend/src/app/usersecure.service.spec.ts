import { TestBed } from '@angular/core/testing';

import { UsersecureService } from './usersecure.service';

describe('UsersecureService', () => {
  let service: UsersecureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersecureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
