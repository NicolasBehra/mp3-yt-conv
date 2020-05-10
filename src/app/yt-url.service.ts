import { Injectable } from '@angular/core';
import { YtUrl } from './yt-url.model';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class YtUrlService {

  archives: Array<YtUrl>;
  newArchive: Subject<YtUrl>;

  constructor() {
    this.archives = [];
    this.newArchive = new Subject<YtUrl>();
  }

  add(archive: YtUrl): void {
    this.archives.unshift(archive);
    this.newArchive.next(archive);
  }
}
