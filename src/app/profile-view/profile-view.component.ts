import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';
import { UserUpdateComponent } from '../user-update/user-update.component';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MovieSummaryComponent } from '../movie-summary/movie-summary.component';
import { MovieDirectorViewComponent } from '../movie-director-view/movie-director-view.component';
import { MovieGenreViewComponent } from '../movie-genre-view/movie-genre-view.component';
import { MoviecardService } from '../moviecard.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnInit {
  user: any;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public movieCardService: MoviecardService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.movieCardService.getMovies();
  }

  getData(): void {
    let userstring: any = localStorage.getItem('user');
    this.user = JSON.parse(userstring);

    // let moviestring:any=localStorage.getItem('movies')
    // this.movies=JSON.parse(moviestring);
  }

  openUserUpdateDialog(): void {
    this.dialog.open(UserUpdateComponent, {
      width: '300px',
    });
  }

  deleteUser(): void {
    if (confirm('Delete Account ?')) {
      this.fetchApiData.deleteUser(this.user._id).subscribe(
        (result: any) => {
          localStorage.clear();
          this.router.navigate(['welcome']);
        },
        (result: any) => {
          this.snackBar.open('User was not deleted', 'OK', {
            duration: 2000,
          });
        }
      );
    }
  }
}
