import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupThemBaivietComponent } from './popup-them-baiviet.component';

describe('PopupThemBaivietComponent', () => {
  let component: PopupThemBaivietComponent;
  let fixture: ComponentFixture<PopupThemBaivietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupThemBaivietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupThemBaivietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
