import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { ManageBlogComponent } from './components/manage-blog/manage-blog.component';
import { ManageGalleryComponent } from './components/manage-gallery/manage-gallery.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { ManageVideoComponent } from './components/manage-video/manage-video.component';
import { ManageAbonnementComponent } from './components/manage-abonnement/manage-abonnement.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ManageBlogComponent,
    ManageGalleryComponent,
    ManageProductComponent,
    ManageUserComponent,
    ManageVideoComponent,
    ManageAbonnementComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
