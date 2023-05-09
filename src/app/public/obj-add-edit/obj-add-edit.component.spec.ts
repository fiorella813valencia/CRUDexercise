import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjAddEditComponent } from './obj-add-edit.component';

describe('ObjAddEditComponent', () => {
  let component: ObjAddEditComponent;
  let fixture: ComponentFixture<ObjAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjAddEditComponent]
    });
    fixture = TestBed.createComponent(ObjAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
