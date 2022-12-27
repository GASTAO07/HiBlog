import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormComponent } from './edit-form.component';

describe('EditFormComponent', () : void => {
  let component: EditFormComponent;
  let fixture: ComponentFixture<EditFormComponent>;

  beforeEach(async () : Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () : void => {
    expect(component).toBeTruthy();
  });
});
