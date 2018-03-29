import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails: any;
  rssa: any = ['Poster', 'Title'];

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  movieId: string = this.route.snapshot.paramMap.get('id');

  getResults(id: string) {
    this.movieDetails = {};
    return this.apiService.getMovieDetails(id)
      .subscribe(data => this.movieDetails = data);
  }

  ngOnInit() {
    this.getResults(this.movieId);
  }
}
