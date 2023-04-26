import { TestBed } from '@angular/core/testing';

import { ListeBlogEnregistresService } from './liste-blog-enregistres.service';

describe('ListeBlogEnregistresService', () : void => {
  let service: ListeBlogEnregistresService;

  beforeEach(() : void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeBlogEnregistresService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
