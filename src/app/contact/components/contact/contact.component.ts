import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { 
   
  }
  ngOnInit(): void {
  }

  @ViewChild('mapContainer', {static: false}) gmap!: ElementRef;
      map: google.maps.Map;
      lat = 37.37;
      lng = -122.04;
      coordinates = new google.maps.LatLng(this.lat, this.lng);
    
    
      mapOptions: google.maps.MapOptions = {
        center: this.coordinates,
        zoom: 8,
        gestureHandling:"cooperative",
      };

    
      ngAfterViewInit(){
        this.mapInitializer();
        throw new Error('Method not implemented.');
        
      }
      
    
      mapInitializer() {
          this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

          const marker = new google.maps.Marker({
              position: this.coordinates,
              map: this.map, // this.map will contain the map object here
              title:"Start"
        });

          const mark2 = new google.maps.Marker({
              label: "TEST",
              position:{lat:37.37,lng:-122.03},
              map: this.map,
              title:"TESTERSZ"
        });

  marker.setMap(this.map);
  mark2.setMap(this.map);
}
       
  }
