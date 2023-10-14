import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [{
 path: 'blogs', component: BlogComponent,
  },
  {path: 'blogs/blog-details/id', component: BlogDetailsComponent}
 ]


@NgModule({
  declarations: [
    BlogComponent,
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    BlogComponent,
    RouterModule
  ],
  providers: []
})
export class BlogModule { }
