import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemsComponent } from './components/product-items/product-items.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductViewByIdComponent } from './components/product-view-by-id/product-view-by-id.component';
import { TestimoniansComponent } from './components/testimonians/testimonians.component';
import { FutureProductComponent } from './components/future-product/future-product.component';

const routes: Routes = [
{
  path: 'products', 
  component: ProductsComponent, data: { animation: 'ProductsPage'}
},
{
  path: 'products/product/id', 
  component: ProductViewByIdComponent, data: { animation: 'ProductPage'}
}
 ];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemsComponent,
    ProductViewByIdComponent,
    TestimoniansComponent,
    FutureProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProductItemsComponent,
    RouterModule,
    ProductsComponent
  ]
})
export class ProductsModule { }
