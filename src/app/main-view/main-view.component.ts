import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

import { MovieSummaryComponent } from '../movie-summary/movie-summary.component';
import { MovieDirectorViewComponent } from '../movie-director-view/movie-director-view.component';
import { MovieGenreViewComponent } from '../movie-genre-view/movie-genre-view.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MoviecardService } from '../moviecard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  movies: any[] = [];
  userstring: any = localStorage.getItem('user');
  user: any = JSON.parse(this.userstring);

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public movieCardService: MoviecardService,
    public router: Router
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['welcome']);
    } else {
      this.movieCardService.getMovies();
    }
  }
}
