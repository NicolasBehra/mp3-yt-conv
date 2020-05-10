import { ConverterModule } from './components/converter/converter.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { 
  registerLocaleData } from '@angular/common';
import localeFr                   from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MAT_DATE_LOCALE
} from '@angular/material/core';


import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SafeUrlPipeModule } from './pipes/safe-url/safe-url.pipe.module';
import { YtUrlService } from './services/yt-url.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ConverterModule,

    SafeUrlPipeModule,

    MatTableModule,
    MatToolbarModule,
    NgbModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },

    YtUrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
