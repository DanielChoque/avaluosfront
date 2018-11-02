import { TestBed } from '@angular/core/testing';

import { UbicationService } from './ubication.service';

describe('UbicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UbicationService = TestBed.get(UbicationService);
    expect(service).toBeTruthy();
  });
});
