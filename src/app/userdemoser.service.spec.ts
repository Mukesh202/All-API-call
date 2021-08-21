import { TestBed } from '@angular/core/testing';

import { UserdemoserService } from './userdemoser.service';

describe('UserdemoserService', () => {
  let service: UserdemoserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdemoserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
