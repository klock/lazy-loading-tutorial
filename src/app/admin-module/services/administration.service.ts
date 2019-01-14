import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Administration } from '../model/administration';

@Injectable({
  providedIn: 'root',
})
export class AdministrationService {

  constructor() {
  }

  retrieveAdministration(): Observable<Administration[]> {
    return of(
      [
        new Administration(
          1234,
          987654321,
          new Date(2018, 1, 15, 7, 8)
        ),
        new Administration(
          4567,
          123456789,
          new Date(2019, 4, 25, 17, 8)
        ),
      ]);
  }
}
