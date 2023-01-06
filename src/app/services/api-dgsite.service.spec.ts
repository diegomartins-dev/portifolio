import { TestBed } from '@angular/core/testing';

import { ApiDgsiteService } from './api-dgsite.service';

describe('ApiDgsiteService', () => {
  let service: ApiDgsiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDgsiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
