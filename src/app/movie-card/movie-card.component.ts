import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MovieSummaryComponent } from '../movie-summary/movie-summary.component';
import { MovieDirectorViewComponent } from '../movie-director-view/movie-director-view.component';
import { MovieGenreViewComponent } from '../movie-genre-view/movie-genre-view.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
movies: any[]=[];
string:any = localStorage.getItem('user');
user:any = JSON.parse(this.string);
favMoviesList: any[]=[];

  constructor(
    public fetchApiData:FetchApiDataService,
    public router:Router, 
    public dialog: MatDialog,
    public snackBar:MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.getMovies();
    this.setFavouriteMoviesList();
  }

  getMovies():void
{
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
    this.movies = resp;
    console.log(this.movies);
    return this.movies;
  });
}
getSummary(movieID:any): void {
  let movie = this.movies.find(m=>{return m._id === movieID})
  this.dialog.open(MovieSummaryComponent, {
    data: {
      title: movie.title,
      imageurl: movie.imageurl,
      description: movie.description,
    },
    width: '500px',
    backdropClass: 'backdropBackground'
  });

 
}

getmovieDirector(movieID:any):void{
  let movie = this.movies.find(m=>{return m._id === movieID})
  this.dialog.open(MovieDirectorViewComponent, {
    data: {
     name:movie.director.name,
     bio:movie.director.bio,
     birth:movie.director.birth,
     death:movie.director.death
    },
    width: '500px',
    backdropClass: 'backdropBackground'
  });
}

getmovieGenre(movieID:any):void{
  let movie = this.movies.find(m=>{return m._id === movieID})
  console.log(movie.genre)
  this.dialog.open(MovieGenreViewComponent, {
    data: {
    name:movie.genre.name,
    description:movie.genre.description
    },
    width: '600px',
    backdropClass: 'backdropBackground'
  });
}

setFavouriteMoviesList():any{
  this.favMoviesList = this.movies.filter((m:any)=>{
    return this.user.favMovies.includes(m._id)
  })
   console.log(this.favMoviesList)
  return this.favMoviesList
}

addFavMovie(username:string,movieID:string):void{
this.fetchApiData.addFavMovie(username,movieID).subscribe((result:any)=>{
  localStorage.setItem('user',JSON.stringify(result));
  this.snackBar.open('Movie was added to Favorites','OK',{duration:3000})
})
}


// favToggle(movie:any):void{
//  this.favStatus(movie._id)
//  ? this.removeFav(movie._id,movie.title)
//  : this.addFav(movie._id,movie.title)
// }

}
