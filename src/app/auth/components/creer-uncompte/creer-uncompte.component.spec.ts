import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerUncompteComponent } from './creer-uncompte.component';

describe('CreerUncompteComponent', (): void => {
  let component: CreerUncompteComponent;
  let fixture: ComponentFixture<CreerUncompteComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [ CreerUncompteComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreerUncompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
