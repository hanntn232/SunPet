import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XemthongtinComponent } from './xemthongtin.component';

describe('XemthongtinComponent', () => {
  let component: XemthongtinComponent;
  let fixture: ComponentFixture<XemthongtinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XemthongtinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XemthongtinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
