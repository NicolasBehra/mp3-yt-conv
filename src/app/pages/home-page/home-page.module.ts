import { CommonModule }     from '@angular/common';
import { NgModule }         from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ArchivesModule }   from '@components/archives/archives.module';
import { ConvertersModule } from '@components/converters/converters.module';

import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,

    ArchivesModule,
    ConvertersModule,

    MatToolbarModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
