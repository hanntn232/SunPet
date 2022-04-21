import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSuaBaivietComponent } from './popup-sua-baiviet.component';

describe('PopupSuaBaivietComponent', () => {
  let component: PopupSuaBaivietComponent;
  let fixture: ComponentFixture<PopupSuaBaivietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupSuaBaivietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSuaBaivietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
