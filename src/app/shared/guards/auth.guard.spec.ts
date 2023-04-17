import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', (): void => {
  let guard: AuthGuard;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', (): void => {
    expect(guard).toBeTruthy();
  });
});
