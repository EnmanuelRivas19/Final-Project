import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HalfDivComponent } from './half-div/half-div.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    NavHeaderComponent,
    DatePickerComponent,
    HalfDivComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
