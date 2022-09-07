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
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})

export class AppModule {
// Diagnostic only: inspect riuter configuration
constructor(
  private router: Router){
   const replace = (key: any, value: any)=>{
    console.log(key);
    return (typeof value == 'function') ? value.name : value;
  }
  console.log('Routes: ', JSON.stringify(this.router.config, replace, 2));
   }
  }
