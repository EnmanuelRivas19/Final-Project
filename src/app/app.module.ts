import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HalfDivComponent } from './half-div/half-div.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { ReservationComponent } from './reservation/reservation.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Combo1Component } from './combo1/combo1.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    DatePickerComponent,
    HalfDivComponent,
    NavigationbarComponent,
    ReservationComponent,
    NextpageComponent,
    HomePageComponent,
    Combo1Component,
    
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
