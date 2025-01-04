import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getUTCDate() {
    return moment().utc().format();
  }

  convertToLocal(date: string, timeZone: string) {
    return moment.tz(date, timeZone).format('YYYY-MM-DD HH:mm:ss');
  }
}