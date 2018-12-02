import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Jsonp } from '@angular/http';
import { MovieInterface } from './dataInterfaces/MovieInterface';

declare var require: any;

@Injectable()
export class CountryService {
  private listMovie: MovieInterface[];

  constructor(private http: Http) {}
  getMovie(url: string): Promise<MovieInterface[]> {
    return this.http
      .get(url)
      .toPromise()
      .then((res: Response) => {
        const doc = res.json();
        console.log(doc);
        const data_length = doc.length;
        this.listMovie = [];
        const newListMovie: MovieInterface[] = [];

        for (let i = 0; i < data_length; i++) {
          const Movie: MovieInterface = {
            movieid: doc[i]['movieid'], // name
            keyword: doc[i]['keyword'], // capital
            moviename: doc[i]['moviename'], // alpha3Code
            releasedate: doc[i]['releasedate'], // callingCodes
            budget: doc[i]['budget'], // region
            boxoffice: doc[i]['boxoffice'] // borders
          };
          newListMovie.push(Movie);
        }
        this.listMovie = newListMovie;
        return this.listMovie;
      });
  }
}
