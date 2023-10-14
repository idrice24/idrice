import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SafePipe } from './pipes/safe.pipe';

// primeNG modules
import { MenubarModule } from 'primeng/menubar';
//import { MessageService } from 'primeng/api';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuModule } from 'primeng/menu';
import { ListboxModule } from 'primeng/listbox';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { Title } from '@angular/platform-browser';
import { ScrollTopModule } from 'primeng/scrolltop';

import { GMapModule } from 'primeng/gmap';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';

import { GalleriaModule } from 'primeng/galleria';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MenubarModule,
   // MessageService,
    DataViewModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    InputTextareaModule,
    InputNumberModule,
    SidebarModule,
    ButtonModule,
    FileUploadModule,
    ConfirmDialogModule,
    DividerModule,
    PanelModule,
    InputTextModule,
    RatingModule,
    DropdownModule,
    TabViewModule,
    FieldsetModule,
    MenuModule,
    ListboxModule,
    CarouselModule,
    CardModule,
    ToastModule,
    RippleModule,
    TooltipModule,
    RadioButtonModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    ScrollTopModule,
    GMapModule,
    PasswordModule,
    CheckboxModule,
    GalleriaModule,
    ChartModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MenubarModule,
   // MessageService,
    DataViewModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    InputTextareaModule,
    InputNumberModule,
    SidebarModule,
    ButtonModule,
    FileUploadModule,
    ConfirmDialogModule,
    DividerModule,
    PanelModule,
    InputTextModule,
    RatingModule,
    DropdownModule,
    TabViewModule,
    FieldsetModule,
    MenuModule,
    ListboxModule,
    CarouselModule,
    CardModule,
    ToastModule,
    RippleModule,
    TooltipModule,
    RadioButtonModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    ScrollTopModule,
    GMapModule,
    PasswordModule,
    CheckboxModule,
    GalleriaModule,
    ChartModule

  ],
  providers: []
})
export class SharedModule { }
