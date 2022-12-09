import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('ServiceService', (): void => {
  let service: AuthService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
