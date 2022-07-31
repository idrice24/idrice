import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    GallerySharedComponent

  ],
  providers: [

  ]
})
export class SharedModule { }
