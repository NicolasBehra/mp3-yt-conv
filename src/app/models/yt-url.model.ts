import { DateManager } from './date-manager';

export class YtUrl {

  url : string;
  date: Date;
  color: string;

  constructor();

  constructor(
    _url?  : string,
    _color?: string
  )

  constructor(
    _url?  : string,
    _color?: string,
    _date? : Date
  ) {
    this.date  = _date  || new Date();
    this.color = _color || 'white';
    this.url   = _url   || '';
  }

  get videoId(): string {
    if (this.url.indexOf('&') > -1)
      return this.url
      .split('?v=')[1]
      .split('&')[0];
    
    return this.url
    .split('?v=')[1];
  }

  get humanDateFr(): string {
    return DateManager.toInput_full_at(
      this.date
    );
  }
}