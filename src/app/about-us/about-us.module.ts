import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
{
  path: 'aboutus', component:AboutUsComponent, data: { animation: 'AboutUsPage'}
}];


@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AboutUsComponent, 
    RouterModule
    ]
})
export class AboutUsModule { }