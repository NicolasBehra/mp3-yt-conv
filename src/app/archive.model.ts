import { DateManager } from './date-manager';

export class Archive {

  url : string;
  date: Date;

  constructor();

  constructor(
    _url?: string
  )

  constructor(
    _url?: string,
    _date?: Date
  ) {
    this.date = _date || new Date();
    this.url  = _url  || '';
  }

  get humanDateFr(): string {
    return DateManager.toInput_full_at(
      this.date
    );
  }
}