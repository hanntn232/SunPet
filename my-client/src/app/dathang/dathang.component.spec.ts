import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DathangComponent } from './dathang.component';

describe('DathangComponent', () => {
  let component: DathangComponent;
  let fixture: ComponentFixture<DathangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DathangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DathangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
