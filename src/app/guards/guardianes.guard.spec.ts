import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardianesGuard } from './guardianes.guard';

describe('guardianesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardianesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
