import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoriesComponent } from './create-categories.component';

describe('CategoriesComponent', () : void => {
  let component: CreateCategoriesComponent;
  let fixture: ComponentFixture<CreateCategoriesComponent>;

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  beforeEach(async () : Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [CreateCategoriesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () : void => {
    expect(component).toBeTruthy();
  });
});
