import { CommonModule } from '@angular/common';
import { NgModule }     from '@angular/core';

import { ConverterModule } from '@components/converters/converter/converter.module';

import { ConvertersComponent } from './converters.component';

@NgModule({
  declarations: [ ConvertersComponent ],
  imports: [
    CommonModule,

    ConverterModule
  ],
  exports: [ ConvertersComponent ],
})
export class ConvertersModule { }
