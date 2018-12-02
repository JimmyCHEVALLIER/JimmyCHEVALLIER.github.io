import { TestBed, inject } from '@angular/core/testing';

import { CountryService } from './country-service.service';

describe('CountryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryService]
    });
  });

  it('should be created', inject([CountryService], (service: CountryService) => {
    expect(service).toBeTruthy();
  }));
});
