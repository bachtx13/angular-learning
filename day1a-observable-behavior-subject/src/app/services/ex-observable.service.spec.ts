import { TestBed } from '@angular/core/testing';

import { ExObservableService } from './ex-observable.service';

describe('ExObservableService', () => {
  let service: ExObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
