import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {StockQuoteRequest, StockQuote, Location} from '../model/model';
import {CommonUtils} from '../utils/common-utils';

@Injectable()
export class LocationService {
  private BASE_URI = 'http://api.javabrown.com';

  private stockQuote: StockQuote;
  private locations: Location[];
  
  constructor(private http: HttpClient, public commonUtils: CommonUtils) {
	  this.initEuronetLocation();
  }
  
  public getEuroLocationByName(englishNameInSearch): Observable<Location[]> {
	    let maxSliceSize = 5;
	    this.locations = this.getStoredLocationFromLocalStore();
		
	    console.log(this.locations == null);
	    let x = this.locations.filter(
   		   (l) => l.englishName.toUpperCase().startsWith(englishNameInSearch.toUpperCase())
		 ).slice(0, maxSliceSize);
		 
	    return Observable.create(observer => { 
            observer.next(x);
            observer.complete();
        });
  }
  
  public getAllEuroLocation(): Observable<Location[]> {
	this.locations = this.getStoredLocationFromLocalStore();
	
	if(this.locations != null && this.locations.length > 0){
		console.log("Getting Euro Locations from Cache");
	    return Observable.create(observer => {
            observer.next(this.locations);
            observer.complete();
        });
	}
	
    return this.initEuronetLocation();
  }

  public initEuronetLocation(): Observable<Location[]> {
    return this.http.get(`${this.BASE_URI}/locations.php`)
      .map((locations: Location[]) => {
          this.locations = locations;
		  this.storeLocationInLocalStore(locations);
          return locations;
      });
  }
  
  public storeLocationInLocalStore(locationsArray) {
    this.commonUtils.addToLocalStore('EURO_LOCATIONS', JSON.stringify(locationsArray));
  }

  public getStoredLocationFromLocalStore() {
    const obj = this.commonUtils.getFromLocalStore('EURO_LOCATIONS');
    let json;
    if (obj) {
      try {
        json = JSON.parse(obj);
      } catch (e) {
        json = null;
      }
      return json;
    }

    return null;
  }  
}
