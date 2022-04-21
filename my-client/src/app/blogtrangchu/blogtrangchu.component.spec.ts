import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogtrangchuComponent } from './blogtrangchu.component';

describe('BlogtrangchuComponent', () => {
  let component: BlogtrangchuComponent;
  let fixture: ComponentFixture<BlogtrangchuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogtrangchuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogtrangchuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
