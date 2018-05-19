import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StockService} from './services/stock.service';
import {LocationService} from './services/location.service';
import {LocationComponent} from './components/location/location.component';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {LocationModule} from './components/location/location.module';
import {CommonUtils} from './utils/common-utils';

@NgModule({
  providers: [CommonUtils],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
	IonicModule,
	LocationModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,	
	LocationModule
  ],
  declarations: [
  ]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    // put stuff here (like singleton) to be shared with lazy modules
    return {
      ngModule: SharedModule,
      providers: [StockService, LocationService]
    };
  }
}
