import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupXoaBaivietThanhcongComponent } from './popup-xoa-baiviet-thanhcong.component';

describe('PopupXoaBaivietThanhcongComponent', () => {
  let component: PopupXoaBaivietThanhcongComponent;
  let fixture: ComponentFixture<PopupXoaBaivietThanhcongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupXoaBaivietThanhcongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupXoaBaivietThanhcongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
