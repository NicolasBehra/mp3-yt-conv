import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { ConverterComponent } from './converter.component';
import { SafeUrlPipeModule } from '../safe-url.pipe.module';


@NgModule({
  declarations: [ConverterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    SafeUrlPipeModule,

    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [ ConverterComponent ]
})
export class ConverterModule { }
