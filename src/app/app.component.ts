import { YtUrlService } from './yt-url.service';
import { YtUrl } from './yt-url.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataSource: Array<YtUrl>;

  displayedColumns: string[] = [
    'date',
    'videoId',
    'url'
  ];

  constructor(
    private archiveService: YtUrlService
  ) {
    this.dataSource = [];
  }

  ngOnInit() {
    this.archiveService.newArchive
    .subscribe(
      (archive: YtUrl) =>
        this.dataSource = [...this.archives]
    )
  }

  get archives(): Array<YtUrl> {
    return this.archiveService.archives;
  }

  isArchivesDefined(): boolean {
    return this.archives.length > 0;
  }

}
