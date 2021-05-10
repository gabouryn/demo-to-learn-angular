import { TestBed } from '@angular/core/testing';

import { SingleDemoService } from './single-demo.service';

describe('SingleDemoService', () => {
  let service: SingleDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
