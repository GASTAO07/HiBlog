import { TestBed } from '@angular/core/testing';

import { ReeditService } from './reedit.service';

describe('ReeditService', () => {
  let service: ReeditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReeditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
