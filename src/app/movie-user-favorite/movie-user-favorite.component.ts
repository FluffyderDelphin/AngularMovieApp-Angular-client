import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-movie-user-favorite',
  templateUrl: './movie-user-favorite.component.html',
  styleUrls: ['./movie-user-favorite.component.scss'],
})
export class MovieUserFavoriteComponent implements OnInit {
  favMovies: any[] = [];
  string: any = localStorage.getItem('user');
  user: any = JSON.parse(this.string);

  constructor(public fetchApiData: FetchApiDataService) {}

  ngOnInit(): void {}

  getFavouriteMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((result: any) => {
      this.favMovies = result.filter((m: any) => {
        return this.user.favMovies.includes(m._id);
      });

      return this.favMovies;
    });
  }
}
