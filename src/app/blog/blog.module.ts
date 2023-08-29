import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';


const routes: Routes = [{
 path: 'blogs', component: BlogComponent,
  },
  {path: 'blogs/blog-details', component: BlogDetailsComponent}
 ]


@NgModule({
  declarations: [
    BlogComponent,
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [BlogComponent]
})
export class BlogModule { }
