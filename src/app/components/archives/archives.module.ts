import { CommonModule }   from '@angular/common';
import { NgModule }       from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { SafeUrlPipeModule } from '@pipes/safe-url/safe-url.pipe.module';

import { ArchivesComponent } from './archives.component';

@NgModule({
  declarations: [ ArchivesComponent ],
  imports: [
    CommonModule,

    SafeUrlPipeModule,

    MatTableModule
  ],
  exports: [
    ArchivesComponent
  ]
})
export class ArchivesModule { }
