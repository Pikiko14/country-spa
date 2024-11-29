import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CoutriesService {
  apiUrl: string;
  countries: Country[] = [];

  constructor(private readonly http: HttpClient) {
    this.apiUrl = 'https://restcountries.com/v3.1';
  }

  searchByCapital(term: string): void {
    const url = `${this.apiUrl}/capital/${term}`;
    this.http.get<Country[]>(url)
      .subscribe(countries => {
        this.countries = countries;
      });
  }
}
