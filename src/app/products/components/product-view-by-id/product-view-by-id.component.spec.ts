import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewByIdComponent } from './product-view-by-id.component';

describe('ProductViewByIdComponent', () => {
  let component: ProductViewByIdComponent;
  let fixture: ComponentFixture<ProductViewByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductViewByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
