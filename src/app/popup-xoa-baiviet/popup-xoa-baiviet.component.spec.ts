import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupXoaBaivietComponent } from './popup-xoa-baiviet.component';

describe('PopupXoaBaivietComponent', () => {
  let component: PopupXoaBaivietComponent;
  let fixture: ComponentFixture<PopupXoaBaivietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupXoaBaivietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupXoaBaivietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
