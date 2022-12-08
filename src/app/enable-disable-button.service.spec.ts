import { TestBed } from '@angular/core/testing';

import { EnableDisableButtonService } from './enable-disable-button.service';

describe('EnableDisableButtonService', () => {
  let service: EnableDisableButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnableDisableButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
