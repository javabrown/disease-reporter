import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  //{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
