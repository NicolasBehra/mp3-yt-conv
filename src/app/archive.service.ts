import { Injectable } from '@angular/core';
import { Archive } from './archive.model';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  archives: Array<Archive>;

  constructor() {
    this.archives = [];
  }
}
