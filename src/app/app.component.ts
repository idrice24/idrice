import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'idrice-blog';
  loading: boolean;

  ngOnInit(){

  }

  // this is to detect any change in the project
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData ;
  }
}
