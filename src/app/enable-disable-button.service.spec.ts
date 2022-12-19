import { TestBed } from '@angular/core/testing';

import { EnableDisableButtonService } from './enable-disable-button.service';

describe('EnableDisableButtonService', (): void => {
  let service: EnableDisableButtonService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnableDisableButtonService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
