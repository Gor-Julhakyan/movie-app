import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiService {

  // _Base URL for get data from omdbApi
  readonly ROOT_URL = 'http://www.omdbapi.com/?apikey=9ca0a994&';

  // RxJS Subject for watch locaalStorage Changes
  private storageSub = new Subject();

  constructor(private http: HttpClient) { }

  // Get data from omdbApi for search | Searching by movie title
  getMovieList(title: string) {
    return this.http.get(`${this.ROOT_URL}s=${title}`);
  }

  // Get data from omdbApi for search | Searching by IMDB Id
  getMovieDetails(id: string) {
    return this.http.get(`${this.ROOT_URL}i=${id}`);
  }

  // Eatching localStorage Changes
  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  // Adding data to localStorage
  addToStorage(data: any) {
    localStorage.setItem(data.imdbID, JSON.stringify(data));
    this.storageSub.next('changed');
  }

  // Removing Dtat from localStorge
  removeFromStorage(id: string) {
    localStorage.removeItem(id);
    this.storageSub.next('changed');
  }

}
