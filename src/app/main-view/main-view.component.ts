import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

import { MovieSummaryComponent } from '../movie-summary/movie-summary.component';
import { MovieDirectorViewComponent } from '../movie-director-view/movie-director-view.component';
import { MovieGenreViewComponent } from '../movie-genre-view/movie-genre-view.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MovieCardComponent } from '../movie-card/movie-card.component';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  movies: any[]=[];
  userstring:any = localStorage.getItem('user');
  user:any = JSON.parse(this.userstring);
  
    constructor(
      public fetchApiData:FetchApiDataService,
      public snackBar:MatSnackBar,
      ) { }
  
    ngOnInit(): void {
      this.getMovies();
      this.getMovies = this.getMovies.bind(this);
      this.addFavMovie= this.addFavMovie.bind(this);
      this.removeFavMovie= this.removeFavMovie.bind(this);
      this.favStatus= this.favStatus.bind(this);
    

    }


    getMovies():void
    {
      this.fetchApiData.getAllMovies().subscribe((resp: any) => {
        this.movies = resp;
        localStorage.setItem('movies',JSON.stringify(resp));
        console.log(this.movies);
        return this.movies;
      });
    }

    

addFavMovie(movieID:string):void{
  this.fetchApiData.addFavMovie(this.user.username,movieID).subscribe((result:any)=>{
    localStorage.setItem('user',JSON.stringify(result));
    this.user= result;
  
    this.snackBar.open('Movie was added to Favorites','OK',{duration:3000})
  })
  
  
  
  }
  
  removeFavMovie(movieID:string):void{
    this.fetchApiData.removeFavMovie(this.user.username,movieID).subscribe((result:any)=>{
      localStorage.setItem('user',JSON.stringify(result));
      this.user= result;
      this.snackBar.open('Movie was removed from  Favorites','OK',{duration:3000})
    })
  
   
  
  
  }
  
  favStatus(movieID:string):void{
      return this.user.favMovies.includes(movieID);
  }
  
  
  
}
