import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CoutriesService {
  apiUrl: string;

  constructor(private readonly http: HttpClient) {
    this.apiUrl = 'https://restcountries.com/v3.1';
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
      );
  }
}
