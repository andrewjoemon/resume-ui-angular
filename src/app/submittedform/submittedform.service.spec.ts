import { TestBed } from '@angular/core/testing';

import { SubmittedformService } from './submittedform.service';

describe('SubmittedformService', () => {
  let service: SubmittedformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmittedformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
