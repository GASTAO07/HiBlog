import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user.component';

describe('UserListComponent', (): void => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () : Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
