import { DateManager } from './date-manager';

export class Archive {

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

  get humanDateFr(): string {
    return DateManager.toInput_full_at(
      this.date
    );
  }
}