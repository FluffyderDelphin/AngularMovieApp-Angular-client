import { TestBed } from '@angular/core/testing';

import { MoviecardService } from './moviecard.service';

describe('MoviecardService', () => {
  let service: MoviecardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviecardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
