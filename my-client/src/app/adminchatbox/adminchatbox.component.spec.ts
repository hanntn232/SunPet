import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminchatboxComponent } from './adminchatbox.component';

describe('AdminchatboxComponent', () => {
  let component: AdminchatboxComponent;
  let fixture: ComponentFixture<AdminchatboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminchatboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminchatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
