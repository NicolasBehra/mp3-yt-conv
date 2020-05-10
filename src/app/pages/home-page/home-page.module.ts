import { CommonModule }     from '@angular/common';
import { NgModule }         from '@angular/core';
import { MatTableModule }   from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ConverterModule }   from '@components/converter/converter.module';

import { SafeUrlPipeModule } from '@pipes/safe-url/safe-url.pipe.module';

import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,

    ConverterModule,

    SafeUrlPipeModule,

    MatTableModule,
    MatToolbarModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
