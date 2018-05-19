import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {HomeComponent} from './home.component';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationComponent } from '../shared/components/location/location.component';

@NgModule({
  providers: [],
  imports: [IonicModule, SharedModule],
  declarations: [HomeComponent],
   entryComponents: [
    LocationComponent
  ],
})
export class HomeModule {
}
