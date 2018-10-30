import { TestBed } from '@angular/core/testing';

import { IgniteService } from './ignite.service';

describe('IgniteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IgniteService = TestBed.get(IgniteService);
    expect(service).toBeTruthy();
  });
});
