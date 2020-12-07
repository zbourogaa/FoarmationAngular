import { TestBed } from '@angular/core/testing';

import { AuthaGuard } from './autha.guard';

describe('AuthaGuard', () => {
  let guard: AuthaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
