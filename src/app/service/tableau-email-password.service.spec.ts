import { TestBed } from '@angular/core/testing';

import { TableauEmailPasswordService } from './tableau-email-password.service';

describe('TableauEmailPasswordService', () : void => {
  let service: TableauEmailPasswordService;

  beforeEach(() : void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableauEmailPasswordService);
  });

  it('should be created', () : void => {
    expect(service).toBeTruthy();
  });
});
