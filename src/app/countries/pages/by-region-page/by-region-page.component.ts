import { Component } from '@angular/core';

import { Country } from '../../interfaces/country';

import { CoutriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.scss'
})
export class ByRegionPageComponent {
  countries: Country[] = [];

  constructor(
    private readonly countriesServices: CoutriesService
  ) {}

  searchByRegion(term: string): void {
    this.countriesServices.searchByRegion(term).subscribe(countries => this.countries = countries);
  }
}
