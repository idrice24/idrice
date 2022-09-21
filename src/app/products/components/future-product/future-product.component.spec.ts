import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureProductComponent } from './future-product.component';

describe('FutureProductComponent', () => {
  let component: FutureProductComponent;
  let fixture: ComponentFixture<FutureProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
