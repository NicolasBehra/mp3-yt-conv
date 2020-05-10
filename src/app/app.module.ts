import { registerLocaleData }      from '@angular/common';
import localeFr                    from '@angular/common/locales/fr';
import { NgModule }                from '@angular/core';
import {
  MAT_DATE_LOCALE
}                                  from '@angular/material/core';
import { MatTableModule }          from '@angular/material/table';
import { MatToolbarModule }        from '@angular/material/toolbar';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ConverterModule }   from '@components/converter/converter.module';
import { HomePageModule }    from '@pages/home-page/home-page.module';
import { SafeUrlPipeModule } from '@pipes/safe-url/safe-url.pipe.module';
import { YtUrlService }      from '@services/yt-url.service';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

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

    HomePageModule,

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
