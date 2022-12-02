import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerUncompteComponent } from './creer-uncompte.component';

describe('CreerUncompteComponent', () => {
  let component: CreerUncompteComponent;
  let fixture: ComponentFixture<CreerUncompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerUncompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerUncompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
