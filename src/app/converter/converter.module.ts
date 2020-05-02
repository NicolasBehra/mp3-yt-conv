import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './converter.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipeModule } from '../safe-url.pipe.module';


@NgModule({
  declarations: [ConverterComponent],
  imports: [
    CommonModule,
    FormsModule,

    SafeUrlPipeModule,

    MatInputModule
  ],
  exports: [ ConverterComponent ]
})
export class ConverterModule { }
