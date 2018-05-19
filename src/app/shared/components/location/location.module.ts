import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
 import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
 
import {LocationComponent} from './location.component';

@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
	IonicModule
  ],
  exports: [
    LocationComponent
  ]
})
export class LocationModule {
}
