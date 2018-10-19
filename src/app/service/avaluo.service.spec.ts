import { TestBed } from '@angular/core/testing';

import { AvaluoService } from './avaluo.service';

describe('AvaluoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvaluoService = TestBed.get(AvaluoService);
    expect(service).toBeTruthy();
  });
});
