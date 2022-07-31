import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
{
  path: '', redirectTo: '/home', pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent, data: { animation: 'HomePage'}
}

  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'})],
  exports:[RouterModule]
})
export class AppRoutingModule { }
