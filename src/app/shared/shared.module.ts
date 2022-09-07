import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { GallerySharedComponent } from './components/gallery-shared/gallery-shared.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    GallerySharedComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    GallerySharedComponent,
    RouterModule


  ],
  providers: [

  ]
})
export class SharedModule { }
