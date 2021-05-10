import { TestBed } from '@angular/core/testing';

import { OffreCandidaturesTriService } from './offre-candidatures-tri.service';

describe('OffreCandidaturesTriService', () => {
  let service: OffreCandidaturesTriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffreCandidaturesTriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
