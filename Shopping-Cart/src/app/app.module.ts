import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

registerLocaleData(localeVi, 'vi-VN');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    PromoCodeComponent
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
