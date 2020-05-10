import {
  AbstractControl,
  FormControl
} from '@angular/forms';
import {
  Component,
  Input
} from '@angular/core';

import { Subject }   from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';

import { option } from 'ts-option';

import { YtUrl }        from '@models/yt-url.model';
import { YtUrlService } from '@services/yt-url.service';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {

  @Input() color: string = 'white';

  ytUrlCtrl: AbstractControl;

  private ytUrl: YtUrl;

  private prevInput: string = '';
  private _onDestroy = new Subject();

  constructor(
    private archiveService: YtUrlService
  ) {
    this.ytUrlCtrl = new FormControl();
  }

  ngOnInit() {
    this.onYtUrlCtrlChanges();
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
    if (option(this.ytUrl).isDefined)
      return this.ytUrl.videoId;

    return '';
  }

  refresh(event: Event): void {
    this.ytUrl = new YtUrl();
    this.prevInput = '';
    this.ytUrlCtrl.setValue('');
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
    );
  }

  isUrl(text: string): boolean {
    return new RegExp(
      '^https:\/\/www\.youtube\.com\/watch\?'
    ).test(text);
  }

  private onYtUrlCtrlChanges(): void {
    this.ytUrlCtrl
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
            this.ytUrl = new YtUrl(
              data,
              this.color
            );
            this.archiveService.add(this.ytUrl);
          }
        }
      }
    );
  }

}
