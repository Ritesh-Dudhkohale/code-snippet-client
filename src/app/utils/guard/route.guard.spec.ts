import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routeGuard } from './route.guard';

describe('routeguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
