import { DatePipe } from '@angular/common';

export class DateManager {

  static toSQL(date: Date): string {
    return new DatePipe("fr-FR").transform(date, 'yyyy-MM-dd');
  }

  static toSQL_full(date: Date): string {
    return new DatePipe("fr-FR").transform(date, 'yyyy-MM-dd HH:mm:ss');
  }

  static toInput(date: Date): string {
    return new DatePipe('fr-FR').transform(date, 'dd/MM/y');
  }

  static toInput_full(date: Date): string {
    return new DatePipe('fr-FR').transform(date, 'dd/MM/y HH:mm');
  }

  static toInput_full_at(date: Date): string {
    return new DatePipe('fr-FR').transform(date, 'dd/MM/y à HH:mm:ss');
  }

}