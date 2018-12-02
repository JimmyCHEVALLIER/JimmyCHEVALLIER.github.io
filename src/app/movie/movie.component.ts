import { Component, OnInit, Input } from '@angular/core';
import { MovieInterface } from '../dataInterfaces/MovieInterface';
import { Http } from '@angular/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input('M') M: MovieInterface;
  constructor(private http: Http) {}

  getmovieid() {
    return this.M.movieid;
  }
  getkeyword() {
    return this.M.keyword;
  }
  getmoviename() {
    return this.M.moviename;
  }
  getreleasedate() {
    return this.M.releasedate;
  }
  getbudget() {
    return this.M.budget;
  }

  getboxoffice() {
    return this.M.boxoffice;
  }

  ngOnInit() {}
}
