import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './components/gallery/gallery.component';
import { VideoComponent } from './components/video/video.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
    {   path: 'gallery', component:GalleryComponent },
    {   path: 'video', component: VideoComponent }

];
@NgModule({
  declarations: [
    GalleryComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule

  ],
  exports: [ GalleryComponent, VideoComponent ]
})
export class MediaModule { }
