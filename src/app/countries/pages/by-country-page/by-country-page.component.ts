import { Component } from '@angular/core';

import { Country } from '../../interfaces/country';

import { CoutriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.scss'
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(
    private readonly countriesServices: CoutriesService
  ) {}

  public searchByCountry(term: string): void {
    this.countriesServices.searchByCountry(term).subscribe(countries => this.countries = countries);
  }
}
