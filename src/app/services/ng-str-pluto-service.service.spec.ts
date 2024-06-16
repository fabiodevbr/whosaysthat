import { TestBed } from '@angular/core/testing';

import { NgStrPlutoServiceService } from './ng-str-pluto-service.service';

describe('NgStrPlutoServiceService', () => {
  let service: NgStrPlutoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgStrPlutoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
