import { TestBed } from '@angular/core/testing';

import { DesguardGuard } from './desguard.guard';

describe('DesguardGuard', () => {
  let guard: DesguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DesguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
