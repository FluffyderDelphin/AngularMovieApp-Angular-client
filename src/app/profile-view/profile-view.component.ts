import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';
import { UserUpdateComponent } from '../user-update/user-update.component';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MovieSummaryComponent } from '../movie-summary/movie-summary.component';
import { MovieDirectorViewComponent } from '../movie-director-view/movie-director-view.component';
import { MovieGenreViewComponent } from '../movie-genre-view/movie-genre-view.component';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
    user:any
    movies:any[]=[];

   favMovies:any[]=[];
   constructor(public dialog: MatDialog,
    public router:Router,
    public fetchApiData:FetchApiDataService,    
    public snackBar: MatSnackBar) { }


    ngOnInit(): void {
      this.getData();
      this.setFavoritesList();
   
    
    }
  
    getData():void {
    let string:any = localStorage.getItem('user');
    this.user = JSON.parse(string);
 
    let moviestring:any=localStorage.getItem('movies')
    this.movies=JSON.parse(moviestring);
    }
  

  setFavoritesList():any{
    this.favMovies = this.movies.filter((m:any)=>
   {    return this.user.favMovies.includes(m._id)
  })
  console.log(this.favMovies);
  return this.favMovies;
  }



 openUserUpdateDialog():void{
   this.dialog.open(UserUpdateComponent,{
     width:'300px'
   })
 }

 deleteUser():void{
   if(confirm('Delete Account ?')) {


 this.fetchApiData.deleteUser(this.user._id).subscribe((result:any)=>{
   localStorage.clear();
   this.router.navigate(['welcome'])
 },(result:any)=>{
   this.snackBar.open('User was not deleted','OK',{
     duration:2000
   })
 })
  }


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



removeFavMovie(movieID:string):void{
  this.fetchApiData.removeFavMovie(this.user.username,movieID).subscribe((result:any)=>{
    localStorage.setItem('user',JSON.stringify(result));
    this.user= result;
    this.setFavoritesList();
    this.snackBar.open('Movie was removed from  Favorites','OK',{duration:3000})
  })




 
}
}