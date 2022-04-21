import { TestBed } from '@angular/core/testing';

import { BlogchitietService } from './blogchitiet.service';

describe('BlogchitietService', () => {
  let service: BlogchitietService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogchitietService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
