import { Component } from '@angular/core';

import { CoutriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss'
})
export class ByCapitalPageComponent {
  constructor(
    private readonly countriesService: CoutriesService
  ) {}

  searchByCapital(term: string) {
    this.countriesService.searchByCapital(term);
  }

  get countries() {
    return this.countriesService.countries;
  }
}
