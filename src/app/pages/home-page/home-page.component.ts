import { Component, OnInit } from '@angular/core';

import { YtUrl } from '@models/yt-url.model';

import { YtUrlService } from '@services/yt-url.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

 
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
