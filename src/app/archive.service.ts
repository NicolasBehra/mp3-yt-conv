import { Injectable } from '@angular/core';
import { Archive } from './archive.model';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  archives: Array<Archive>;
  newArchive: Subject<Archive>;

  constructor() {
    this.archives = [];
    this.newArchive = new Subject<Archive>();
  }

  add(archive: Archive): void {
    this.archives.unshift(archive);
    this.newArchive.next(archive);
  }
}
