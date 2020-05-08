import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { ConverterComponent } from './converter.component';
import { SafeUrlPipeModule } from '../safe-url.pipe.module';


@NgModule({
  declarations: [ConverterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    SafeUrlPipeModule,

    MatInputModule
  ],
  exports: [ ConverterComponent ]
})
export class ConverterModule { }
