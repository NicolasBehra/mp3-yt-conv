import { Component, Input } from '@angular/core';
import { option } from 'ts-option';

import { ArchiveService } from './../archive.service';
import { Archive } from '../archive.model';
import { AbstractControl, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {

  @Input() color: string = 'white';

  youtubeUrl: string = '';
  youtubeUrlCtrl: AbstractControl;

  private prevYoutubeUrl: string = '';
  private prevInput: string = '';
  private _videoId: string = '';
  private _onDestroy = new Subject();

  constructor(
    private archiveService: ArchiveService
  ) {
    this.youtubeUrl = '';

    this.prevYoutubeUrl = '';
    this._videoId = '';
    this.youtubeUrlCtrl = new FormControl();
  }

  ngOnInit() {
    this.youtubeUrlCtrl
    .valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(
      (data) => {        
        if (
          option(data).isDefined
          && data.trim() !== ''
          && data !== this.prevInput
        ) {
          this.prevInput = data;

          if (this.isValidYoutubeUrl(data))
            this.youtubeUrl = data;
        }
      }
    )
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  get archives(): Array<Archive> {
    return this.archiveService.archives;
  }

  get videoId(): string {
    if (
      this.youtubeUrl !== ''
      && this.youtubeUrl !== this.prevYoutubeUrl
      && this.isValidYoutubeUrl(this.youtubeUrl)
    ) {
      this.prevYoutubeUrl = this.youtubeUrl;
      setTimeout(
        () =>
        this.archives.unshift(
          new Archive(
            this.youtubeUrl,
            this.color))
        );

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
    return option(this.videoId).isDefined
    && this.videoId.trim() !== '';
  }

  isValidYoutubeUrl(url: string): boolean {
    return (
      option(url).isDefined
      && url.trim() !== ''
      && url.indexOf('https://www.youtube.com/watch?v=') === 0
      && url.split('&').length > 2
    );
  }

  isUrl(text: string): boolean {
    return new RegExp(
      '^https:\/\/www\.youtube\.com\/watch\?'
    ).test(text);
  }

}
