import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemsComponent } from './components/product-items/product-items.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
{
  path: 'products', component: ProductsComponent, data: { animation: 'ProductsPage'}
}];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [ProductItemsComponent,RouterModule, ProductsComponent]
})
export class ProductsModule { }
