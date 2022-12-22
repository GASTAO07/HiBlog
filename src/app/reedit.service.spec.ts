import { TestBed } from '@angular/core/testing';

import { ReeditService } from './reedit.service';

describe('ReeditService', () : void => {
  let service: ReeditService;

  beforeEach(() : void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReeditService);
  });

  it('should be created', () : void => {
    expect(service).toBeTruthy();
  });
});
