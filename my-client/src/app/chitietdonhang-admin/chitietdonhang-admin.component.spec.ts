import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietdonhangAdminComponent } from './chitietdonhang-admin.component';

describe('ChitietdonhangAdminComponent', () => {
  let component: ChitietdonhangAdminComponent;
  let fixture: ComponentFixture<ChitietdonhangAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChitietdonhangAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietdonhangAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
