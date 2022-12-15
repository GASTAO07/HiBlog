import { TestBed } from '@angular/core/testing';

import { LoginValidationServiceService } from './login-validation-service.service';

describe('LoginValidationServiceService', (): void => {
  let service: LoginValidationServiceService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginValidationServiceService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
