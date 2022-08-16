import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MapViewComponent } from './components/map-view/map-view.component';

const routes: Routes = [
{
  path: 'about-us', component:AboutUsComponent
}];


@NgModule({
  declarations: [
    AboutUsComponent,
    MapViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, AboutUsComponent]
})
export class AboutUsModule { }
