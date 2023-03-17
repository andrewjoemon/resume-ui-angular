import { TestBed } from '@angular/core/testing';

import { SubmitformguardGuard } from './submitformguard.guard';

describe('SubmitformguardGuard', () => {
  let guard: SubmitformguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SubmitformguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
