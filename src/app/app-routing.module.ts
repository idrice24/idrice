import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/components/about-us/about-us.component';

const routes: Routes = [
{
  path: '', redirectTo: '/home', pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent, data: { animation: 'HomePage'}
},
{
  path: 'about-us',
  loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
},
{
  path: 'contact',
  loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
},
{
  path: 'products',
  loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
},
{ path: 'media',
  loadChildren: () => import('./media/media.module').then(m => m.MediaModule)
},
{
  path:'blog',
  loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
},

{
  path: '**', component: PageNotFoundComponent
}

  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { enableTracing: true, anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'})],
  exports:[RouterModule]
})
export class AppRoutingModule { }
