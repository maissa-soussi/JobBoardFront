import { TestBed } from '@angular/core/testing';

import { MesCandidaturesService } from './mes-candidatures.service';

describe('MesCandidaturesService', () => {
  let service: MesCandidaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesCandidaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
