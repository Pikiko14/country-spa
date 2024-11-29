import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs';

import { CoutriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.scss',
})
export class CountryPageComponent implements OnInit {
  country!: Country | null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private readonly countriesServices: CoutriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesServices.searchCountry(id))
      )
      .subscribe(country => {
        if (!country) {
          return this.router.navigateByUrl('/');
        }
        this.country = country;
        return country;
      });
  }
}
