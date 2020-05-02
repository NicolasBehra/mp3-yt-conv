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
    if (this.youtubeUrl !== ''
      && this.youtubeUrl !== this.prevYoutubeUrl) {
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

}
