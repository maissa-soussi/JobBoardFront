import { TestBed } from '@angular/core/testing';

import { AdminOffresService } from './admin-offres.service';

describe('AdminOffresService', () => {
  let service: AdminOffresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminOffresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
