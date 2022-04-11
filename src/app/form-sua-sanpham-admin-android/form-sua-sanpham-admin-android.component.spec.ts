import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSuaSanphamAdminAndroidComponent } from './form-sua-sanpham-admin-android.component';

describe('FormSuaSanphamAdminAndroidComponent', () => {
  let component: FormSuaSanphamAdminAndroidComponent;
  let fixture: ComponentFixture<FormSuaSanphamAdminAndroidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSuaSanphamAdminAndroidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSuaSanphamAdminAndroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
