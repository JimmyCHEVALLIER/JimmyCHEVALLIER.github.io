import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country-service.service';
import { MovieInterface } from '../dataInterfaces/MovieInterface';

declare var $;

@Component({
  selector: 'app-liste-pays',
  templateUrl: './liste-pays.component.html',
  styleUrls: ['./liste-pays.component.css']
})
export class ListePaysComponent implements OnInit {
  private listeFilm: MovieInterface[] = [];

  constructor(private countryService: CountryService) {
    // 'https://imanebahousspreprod.000webhostapp.com/tblMovies.json'
  }

  getListeMovie(): MovieInterface[] {
    return this.listeFilm;
  }
  getSearch(): void {
    document.querySelector('#search').classList.toggle('hidden');
  }

  getListeFilteredMovie(find: string) {
    return this.listeFilm;
  }

  onSearchChange(find: string) {
    if (find === undefined || find === '') {
      this.listeFilm = [];
    } else {
      console.log('else');
      this.countryService
        .getMovie('https://imanebahousspreprod.000webhostapp.com/req.php?searsh=' + find)
        .then(l => (this.listeFilm = l));
      console.log(this.listeFilm);
    }
  }

  ngOnInit() {}
}
