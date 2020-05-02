import { Component } from '@angular/core';

import { ArchiveService } from './../archive.service';
import { Archive } from '../archive.model';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {

  youtubeUrl: string = '';

  private prevYoutubeUrl: string = '';
  private _videoId: string = '';

  constructor(
    private archiveService: ArchiveService
  ) {
    this.youtubeUrl = '';

    this.prevYoutubeUrl = '';
    this._videoId = '';
  }

  get archives(): Array<Archive> {
    return this.archiveService.archives;
  }

  get videoId(): string {
    if (
      this.youtubeUrl !== ''
      && this.youtubeUrl !== this.prevYoutubeUrl
      && this.isValidYoutubeUrl()
    ) {
      this.prevYoutubeUrl = this.youtubeUrl;
      this.archives.unshift(
        new Archive(
          this.youtubeUrl));

      return this._videoId = this.youtubeUrl
      .split('?v=')[1].split('&')[0];
    }

    return this._videoId;
  }

  get iFrameUrl(): string {
    return 'https://youtube2mp3api.com/@api/button/mp3/'
    + this.videoId;
  }

  isVideoIdDefined(): boolean {
    return this.videoId && this.videoId.trim() !== '';
  }

  isValidYoutubeUrl(): boolean {
    return (
      this.youtubeUrl != null
      && this.youtubeUrl != undefined
      && this.youtubeUrl.indexOf('https://www.youtube.com/watch?v=') === 0
      && this.youtubeUrl.split('&').length > 2
    );
  }

  isUrl(text: string): boolean {
    return new RegExp(
      '^https:\/\/www\.youtube\.com\/watch\?'
    ).test(text);
  }

}
