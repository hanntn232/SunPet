import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSuaBaivietThanhcongComponent } from './popup-sua-baiviet-thanhcong.component';

describe('PopupSuaBaivietThanhcongComponent', () => {
  let component: PopupSuaBaivietThanhcongComponent;
  let fixture: ComponentFixture<PopupSuaBaivietThanhcongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupSuaBaivietThanhcongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSuaBaivietThanhcongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
