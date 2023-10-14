import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';

// import { InMemoryDataService } from './in-memory-data.service';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})

export class AppModule {
// Diagnostic only: inspect router configuration
constructor(
  private router: Router,
  private messageService: MessageService){
   const replace = (key: any, value: any)=>{
    console.log(key);
    return (typeof value == 'function') ? value.name : value;
  }
  console.log('Routes: ', JSON.stringify(this.router.config, replace, 2));
   }
  }
