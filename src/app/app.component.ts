import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'Movie App';
  filteredMovies: any;

  constructor(private apiService: ApiService, private router: Router) { }

  // navigate to search result page
  search(title: string) {
    this.router.navigate(['search-results', title]);
    this.filteredMovies = '';
  }

  // Search with autocomplite
  autocumpliteEmitter($event) {
    return this.apiService.getMovieList($event)
      .subscribe(data => this.filteredMovies = data['Search']);
  }

  // navigate to movie details
  getDetails(id: string) {
    this.router.navigate(['movie', id]);
    this.filteredMovies = '';
    window.location.reload();
  }

  // Adding movie to user list
  addToMyList(index: number) {
    this.apiService.addToStorage(this.filteredMovies[index]);
  }

}
