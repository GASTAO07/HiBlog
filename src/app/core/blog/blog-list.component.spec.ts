import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListComponent } from './blog-list.component';

describe('BlogListComponent', () : void => {
  let component: BlogListComponent;
  let fixture: ComponentFixture<BlogListComponent>;

  beforeEach(async () : Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [ BlogListComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () : void => {
    expect(component).toBeTruthy();
  });
});
