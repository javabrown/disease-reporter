import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { LocationComponent } from '../shared/components/location/location.component';
import { Location } from '../shared/model/model';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  //styleUrls: ['home.component.css']
})
export class HomeComponent {
    selectedLocation: Location;
	
    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
       this.selectedLocation = new Location();
	   this.selectedLocation.englishName = "Enter From City";
    }

    presentLocationModal() {
       let profileModal = this.modalCtrl.create(LocationComponent, { userId: 8675309 });
       profileModal.present();
	   
	   profileModal.onDidDismiss(selectedLocation => {
           console.log(selectedLocation);
		   this.selectedLocation = selectedLocation;
       });
   
    }
}