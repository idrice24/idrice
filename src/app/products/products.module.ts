import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
{
  path: 'products', 
  component: ProductsComponent, data: { animation: 'ProductsPage'}
}
 ];

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    ProductsComponent
  ]
})
export class ProductsModule { }
