import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertyCradComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [	
    AppComponent,
    PropertyCradComponent,
    PropertyListComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
