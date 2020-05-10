import { ArchiveService } from './archive.service';
import { Archive } from './archive.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataSource: Array<Archive>;

  displayedColumns: string[] = [
    'date',
    'videoId',
    'url'
  ];

  constructor(
    private archiveService: ArchiveService
  ) {
    this.dataSource = [];
  }

  ngOnInit() {
    this.archiveService.newArchive
    .subscribe(
      (archive: Archive) =>
        this.dataSource = [...this.archives]
    )
  }

  get archives(): Array<Archive> {
    return this.archiveService.archives;
  }

  isArchivesDefined(): boolean {
    return this.archives.length > 0;
  }

}
