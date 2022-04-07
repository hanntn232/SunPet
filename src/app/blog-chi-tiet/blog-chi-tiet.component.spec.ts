import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogChiTietComponent } from './blog-chi-tiet.component';

describe('BlogChiTietComponent', () => {
  let component: BlogChiTietComponent;
  let fixture: ComponentFixture<BlogChiTietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogChiTietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
