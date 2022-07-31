import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'
import { ContactModule } from '../contact/contact.module';
import { BlogModule } from '../blog/blog.module';
import { ProductsModule } from '../products/products.module';
import { MediaModule } from '../media/media.module';
import { AboutUsModule } from '../about-us/about-us.module';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    ContactModule,
    BlogModule,
    ContactModule,
    ProductsModule,
    MediaModule,
    AboutUsModule
  ],
  exports: [
    HomeComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
