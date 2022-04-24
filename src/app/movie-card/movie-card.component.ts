import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MovieSummaryComponent } from '../movie-summary/movie-summary.component';
import { MovieDirectorViewComponent } from '../movie-director-view/movie-director-view.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
movies: any[]=[];

  constructor(public fetchApiData:FetchApiDataService,public router:Router, public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getMovies();
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
  this.dialog.open(MovieDirectorViewComponent, {
    data: {
    name:movie.genre.name,
    description:movie.genre.description
    },
    width: '600px',
    backdropClass: 'backdropBackground'
  });
}

}
