import { Component, Input } from '@angular/core';
import { option } from 'ts-option';

import { YtUrlService } from '../yt-url.service';
import { YtUrl } from '../yt-url.model';
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

  youtubeUrlCtrl: AbstractControl;

  private archive: YtUrl;

  private prevInput: string = '';
  private _onDestroy = new Subject();

  constructor(
    private archiveService: YtUrlService
  ) {
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

          if (this.isValidYoutubeUrl(data)) {
            this.archive = new YtUrl(
              data,
              this.color
            );
            this.archiveService.add(this.archive);
          }
        }
      }
    )
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  get iFrameUrl(): string {
    return 'https://youtube2mp3api.com/@api/button/mp3/'
    + this.videoId;
  }

  get videoId(): string {
    if (option(this.archive).isDefined)
      return this.archive.videoId;

    return '';
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
