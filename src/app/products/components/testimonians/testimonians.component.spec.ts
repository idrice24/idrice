import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniansComponent } from './testimonians.component';

describe('TestimoniansComponent', () => {
  let component: TestimoniansComponent;
  let fixture: ComponentFixture<TestimoniansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimoniansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimoniansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
