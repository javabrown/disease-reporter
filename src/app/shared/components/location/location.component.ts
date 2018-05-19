import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import {LocationService} from '../../services/location.service';
 
import {Location} from '../../model/model';
 
@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  //styleUrls: ['home.component.css']
})
export class LocationComponent {
  locations: Location[];
  @Output() public selectedLocation = new EventEmitter();
  
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private locationService: LocationService) {
     this.locationService.getAllEuroLocation()//ByName('London') getEuroLocationByName
	 //this.locationService.getEuroLocationByName('WIEN PRATERSTERN')
      .subscribe((productsResult: Location[]) => {
        if (productsResult !== null) {
          this.locations = productsResult.slice(0, 30);
        } else {
          this.locations = []; 
        }
      },
        (error: Error) => {
          this.locations = [];
        }
      );
	  
	  console.log("Call done");
  }
  
  public searchLocation(name) {
	 if(name.length % 2 == 0) return; //this is to avoid API call on every key press
	 
	 console.log(name);
	 this.locationService.getEuroLocationByName(name)
      .subscribe((productsResult: Location[]) => {
        if (productsResult !== null) {
          this.locations = productsResult;
        } else {
          this.locations = []; 
        }
      },
        (error: Error) => {
          this.locations = [];
        }
      );	  
  }
  
  public onLocationSelect(location){
    this.selectedLocation.emit(location);
	let data = { 'foo': 'bar' };
	this.viewCtrl.dismiss(location);
  }
  
}
