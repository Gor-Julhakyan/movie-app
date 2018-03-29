import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  // Movie list
  myList: any = new Array();

  constructor(private apiService: ApiService) { }

  // Deleting movie from localStorage
  removeMovie(id: string) {
    this.apiService.removeFromStorage(id);
  }

  // Getting movie list data from localStorage
  getData() {
    this.myList = [];
    for (const key of Object.keys(localStorage)) {
      if (key.substring(0, 2) === 'tt') {
        this.myList.push(JSON.parse(localStorage.getItem(key)));
      }
    }
  }

  ngOnInit() {
    // Calling getDtat Fn
    this.getData();

    // Watching localStorage changes and updating view
    this.apiService.watchStorage().subscribe((data: string) => {
      this.getData();
    });
  }
}
