import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountryService } from './country-service.service';

import { AppComponent } from './app.component';
import { ListePaysComponent } from './liste-pays/liste-pays.component';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [AppComponent, ListePaysComponent, MovieComponent],
  imports: [BrowserModule, HttpModule, JsonpModule],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
