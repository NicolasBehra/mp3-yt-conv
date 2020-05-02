import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  youtubeUrl: string = '';

  private prevYoutubeUrl: string = '';

  private _videoId: string = '';

  get videoId(): string {
    if (
      this.youtubeUrl !== ''
      && this.youtubeUrl !== this.prevYoutubeUrl
      && this.isValidYoutubeUrl()
    ) {
      this.prevYoutubeUrl = this.youtubeUrl;
      return this._videoId = this.youtubeUrl
      .split('?v=')[1].split('&')[0];
    }

    return this._videoId;
  }

// N-wfb25WmV4
// apKja6C804o
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
