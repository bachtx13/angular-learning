import { TestBed } from '@angular/core/testing';

import { ObservableExService } from './observable-ex.service';

describe('ObservableExService', () => {
  let service: ObservableExService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservableExService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
