import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonhangAdminComponent } from './donhang-admin.component';

describe('DonhangAdminComponent', () => {
  let component: DonhangAdminComponent;
  let fixture: ComponentFixture<DonhangAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonhangAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonhangAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
