import { TestBed } from '@angular/core/testing';

import { IdmanagerService } from './idmanager.service';

describe('IdmanagerService', () : void => {
  let service: IdmanagerService;

  beforeEach(() : void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdmanagerService);
  });

  it('should be created', () : void => {
    expect(service).toBeTruthy();
  });
});
