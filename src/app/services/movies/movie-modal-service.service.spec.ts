import { TestBed } from '@angular/core/testing';

import { MovieModalServiceService } from './movie-modal-service.service';

describe('MovieModalServiceService', () => {
  let service: MovieModalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieModalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
