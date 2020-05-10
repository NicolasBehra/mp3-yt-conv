import { CommonModule } from '@angular/common';
import { NgModule }     from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
}                          from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule }   from '@angular/material/icon';
import { MatInputModule }  from '@angular/material/input';

import { SafeUrlPipeModule }  from '@pipes/safe-url/safe-url.pipe.module';

import { ConverterComponent } from './converter.component';

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
