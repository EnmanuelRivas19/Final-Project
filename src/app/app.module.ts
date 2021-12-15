import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    NavHeaderComponent,
    ComboBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
