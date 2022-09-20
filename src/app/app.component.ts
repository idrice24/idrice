import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';
import { slideInAnimation } from './shared/animations/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})


export class AppComponent implements OnInit {
  title = 'idrice';
  loading: boolean;

  constructor(
    private router: Router
    ){
    this.loading = true;
    console.log('##########> configured routes: ', this.router)
  }

  ngOnInit(){
    timer(2000).subscribe(x => this.loading = false);

  }

  // this is to detect any change in the project
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
