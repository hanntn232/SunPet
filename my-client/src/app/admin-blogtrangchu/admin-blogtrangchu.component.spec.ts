import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogtrangchuComponent } from './admin-blogtrangchu.component';

describe('AdminBlogtrangchuComponent', () => {
  let component: AdminBlogtrangchuComponent;
  let fixture: ComponentFixture<AdminBlogtrangchuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlogtrangchuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogtrangchuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
