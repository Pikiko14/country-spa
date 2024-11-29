import { Component } from '@angular/core';

import { Country } from '../../interfaces/country';

import { CoutriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss'
})
export class ByCapitalPageComponent {
  countries: Country[] = [];

  constructor(
    private readonly countriesService: CoutriesService
  ) {}

  searchByCapital(term: string): void {
    this.countriesService.searchByCapital(term)
      .subscribe(countries => this.countries = countries);
  }
}
