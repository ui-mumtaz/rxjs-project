import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RxjsDemoService {

  constructor() { }

  exampleMap() {
    return of(1, 2, 3).pipe(
      map(x => x * 2)
    );
  }

  exampleMergeMap() {
    return of('a', 'b', 'c').pipe(
      mergeMap(x => of(x + '1', x + '2'))
    );
  }

  exampleSwitchMap() {
    return of('x', 'y', 'z').pipe(
      switchMap(x => of(x + '1', x + '2'))
    );
  }
}