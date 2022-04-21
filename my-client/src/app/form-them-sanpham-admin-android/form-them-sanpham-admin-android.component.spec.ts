import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThemSanphamAdminAndroidComponent } from './form-them-sanpham-admin-android.component';

describe('FormThemSanphamAdminAndroidComponent', () => {
  let component: FormThemSanphamAdminAndroidComponent;
  let fixture: ComponentFixture<FormThemSanphamAdminAndroidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormThemSanphamAdminAndroidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormThemSanphamAdminAndroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
