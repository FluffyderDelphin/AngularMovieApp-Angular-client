import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MovieSummaryComponent } from '../movie-summary/movie-summary.component';
import { MovieDirectorViewComponent } from '../movie-director-view/movie-director-view.component';
import { MovieGenreViewComponent } from '../movie-genre-view/movie-genre-view.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MoviecardService } from '../moviecard.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  @Input() favStatus: any;
  @Input() addFavMovie: any;
  @Input() removeFavMovie: any;

  constructor(
    public fetchApiData: FetchApiDataService,
    public router: Router,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public movieCardService: MoviecardService
  ) {}

  ngOnInit(): void {}

  getmovieDirector(): void {
    this.dialog.open(MovieDirectorViewComponent, {
      data: {
        name: this.movie.director.name,
        bio: this.movie.director.bio,
        birth: this.movie.director.birth,
        death: this.movie.director.death,
      },
      width: '500px',
      backdropClass: 'backdropBackground',
    });
  }

  getmovieGenre(): void {
    console.log(this.movie.genre);
    this.dialog.open(MovieGenreViewComponent, {
      data: {
        name: this.movie.genre.name,
        description: this.movie.genre.description,
      },
      width: '600px',
      backdropClass: 'backdropBackground',
    });
  }

  getSummary(): void {
    this.dialog.open(MovieSummaryComponent, {
      data: {
        title: this.movie.title,
        imageurl: this.movie.imageurl,
        description: this.movie.description,
      },
      width: '500px',
      backdropClass: 'backdropBackground',
    });
  }
}
