
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FetchApiDataService } from './fetch-api-data.service';

@Injectable({
  providedIn: 'root'
})
export class MoviecardService {

  movies: any[] = [];
  userstring: any = localStorage.getItem('user');
  user: any = JSON.parse(this.userstring);
  favMovies:any[]=[];
  
  constructor(
  public fetchApiData: FetchApiDataService,
  public snackBar: MatSnackBar,
  ) {
  
  this.getMovies = this.getMovies.bind(this);
  this.addFavMovie = this.addFavMovie.bind(this);
  this.removeFavMovie = this.removeFavMovie.bind(this);
  this.favStatus = this.favStatus.bind(this);
  this.setFavoritesList = this.setFavoritesList.bind(this);
  }
  
  getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
  this.movies = resp;
  localStorage.setItem('movies', JSON.stringify(resp));
  console.log(this.movies);
  return this.movies;
  });
  }
  

  addFavMovie(movieID:string):void{
    this.fetchApiData.addFavMovie(this.user.username,movieID).subscribe((result:any)=>{
      localStorage.setItem('user',JSON.stringify(result));
      this.setFavoritesList();
      this.user= result;
    
      this.snackBar.open('Movie was added to Favorites','OK',{duration:3000})
    })
    
    
    
    }
    
  removeFavMovie(movieID: string): void {
    this.fetchApiData.removeFavMovie(this.user.username, movieID).subscribe((result: any) => {
    localStorage.setItem('user', JSON.stringify(result));
    this.setFavoritesList();
    this.user = result;
    this.snackBar.open('Movie was removed from Favorites', 'OK', { duration: 3000 })
    })
    }
    
    favStatus(movieID: string): boolean {
    return this.user.favMovies.includes(movieID);
    }


    setFavoritesList():any{
      this.favMovies = this.movies.filter((m:any)=>
     {    return this.user.favMovies.includes(m._id)
    })
    console.log(this.favMovies);
    return this.favMovies;
    }
  
  
}
