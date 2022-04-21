import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupThemThanhcongComponent } from './popup-them-thanhcong.component';

describe('PopupThemThanhcongComponent', () => {
  let component: PopupThemThanhcongComponent;
  let fixture: ComponentFixture<PopupThemThanhcongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupThemThanhcongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupThemThanhcongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
