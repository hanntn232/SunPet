import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintasklistComponent } from './admintasklist.component';

describe('AdmintasklistComponent', () => {
  let component: AdmintasklistComponent;
  let fixture: ComponentFixture<AdmintasklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintasklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
