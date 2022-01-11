import { TestBed } from '@angular/core/testing';

import { AdminsecureService } from './adminsecure.service';

describe('AdminsecureService', () => {
  let service: AdminsecureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminsecureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
