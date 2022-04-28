import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { map } from 'rxjs/operators';

const apiUrl = 'https://alexandersmovieapp.herokuapp.com/';
@Injectable({
  providedIn: 'root',
})
export class FetchApiDataService {
  constructor(private http: HttpClient) {}
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiUrl + 'users', userDetails)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
          `Error body is: ${JSON.stringify(error.error)}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get<object>(apiUrl + 'movies', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  getOneMovie(movie: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get<object>(apiUrl + 'movies' + '/' + movie, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  getDirector(name: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get<object>(apiUrl + 'movies/directors/' + name, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  getGenre(genre: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get<object>(apiUrl + 'movies/genres/' + genre, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  removeFavMovie(user: string, movie: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .put<object>(
        apiUrl + 'users/' + user + '/favorites/remove/' + movie,
        {},
        {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token,
          }),
        }
      )
      .pipe(catchError(this.handleError));
  }

  addFavMovie(user: string, movie: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .put<object>(
        apiUrl + 'users/' + user + '/favorites/add/' + movie,
        {},
        {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token,
          }),
        }
      )
      .pipe(catchError(this.handleError));
  }

  deleteUser(user: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .delete<string>(apiUrl + 'users/' + user, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  updateUser(username: string, user: object): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .put<object>(apiUrl + 'users/' + username, user, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  getUserData(username: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get<object>(apiUrl + 'users/' + username, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  loginUser(credentials: any): Observable<any> {
    return this.http
      .post(apiUrl + 'login', credentials, {})
      .pipe(catchError(this.handleError));
  }

  private extractResponseData(res: Response): any {
    const body = res;
    return body || {};
  }
}
