import { TestBed } from '@angular/core/testing';

import { TableauEmailPasswordService } from './tableau-email-password.service';

describe('TableauEmailPasswordService', () => {
  let service: TableauEmailPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableauEmailPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
