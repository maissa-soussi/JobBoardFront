import { TestBed } from '@angular/core/testing';

import { AdminCandidaturesService } from './admin-candidatures.service';

describe('AdminCandidaturesService', () => {
  let service: AdminCandidaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCandidaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
