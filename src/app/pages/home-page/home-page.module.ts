import { CommonModule }     from '@angular/common';
import { NgModule }         from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ArchivesModule }  from '@components/archives/archives.module';
import { ConverterModule } from '@components/converters/converter/converter.module';

import { HomePageComponent } from './home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,

    ArchivesModule,
    ConverterModule,

    MatToolbarModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
