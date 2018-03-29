import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass'],
  providers: [ApiService]
})
export class SearchResultsComponent implements OnInit {

  // Search Results Data
  searchResults: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  // Getting movie title from route
  movieTitle: string = this.route.snapshot.paramMap.get('title');

  // Get Results Data
  getResults(title: string) {
    this.searchResults = [];
    return this.apiService.getMovieList(title)
      .subscribe(data => this.searchResults = data['Search']);
  }

  // navigate to movie detail page
  getDetails(id: string) {
    this.router.navigate(['movie', id]);
  }

  // Adding movie to user list
  addToMyList(index: number) {
    this.apiService.addToStorage(this.searchResults[index]);
  }


  ngOnInit() {
    // Getting results when page is loadid
    this.getResults(this.movieTitle);

  }

}
