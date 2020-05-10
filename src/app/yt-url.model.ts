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
    return this.url
    .split('?v=')[1]
    .split('&')[0];
  }

  get humanDateFr(): string {
    return DateManager.toInput_full_at(
      this.date
    );
  }
}