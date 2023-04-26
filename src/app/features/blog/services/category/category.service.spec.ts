import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';

describe('CategoryService', () : void => {
  let service: CategoryService;

  beforeEach(() : void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryService);
  });

  it('should be created', () : void => {
    expect(service).toBeTruthy();
  });
});
