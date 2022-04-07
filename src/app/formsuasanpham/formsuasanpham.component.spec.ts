import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsuasanphamComponent } from './formsuasanpham.component';

describe('FormsuasanphamComponent', () => {
  let component: FormsuasanphamComponent;
  let fixture: ComponentFixture<FormsuasanphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsuasanphamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsuasanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
