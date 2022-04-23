import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupLydohuyComponent } from './popup-lydohuy.component';

describe('PopupLydohuyComponent', () => {
  let component: PopupLydohuyComponent;
  let fixture: ComponentFixture<PopupLydohuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupLydohuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupLydohuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
