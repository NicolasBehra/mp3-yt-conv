import { ArchiveService } from './archive.service';
import { Archive } from './archive.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displayedColumns: string[] = [
    'date',
    'url'
  ];

  constructor(
    private archiveService: ArchiveService
  ) {
  }

  get archives(): Array<Archive> {
    return this.archiveService.archives;
  }

  isArchivesDefined(): boolean {
    return this.archives.length > 0;
  }

}
