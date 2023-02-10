import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarComponent } from './tool-bar.component';

describe('ToolBarComponent', () : void => {
  let component: ToolBarComponent;
  let fixture: ComponentFixture<ToolBarComponent>;

  beforeEach(async () : Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [ ToolBarComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', ()  : void => {
    expect(component).toBeTruthy();
  });
});
