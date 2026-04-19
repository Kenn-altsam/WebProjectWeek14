import { TestBed } from '@angular/core/testing';

import { SearchHotel } from './search-hotel';

describe('SearchHotel', () => {
  let service: SearchHotel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchHotel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
