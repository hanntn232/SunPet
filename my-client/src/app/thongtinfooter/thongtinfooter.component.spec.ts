import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinfooterComponent } from './thongtinfooter.component';

describe('ThongtinfooterComponent', () => {
  let component: ThongtinfooterComponent;
  let fixture: ComponentFixture<ThongtinfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongtinfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
