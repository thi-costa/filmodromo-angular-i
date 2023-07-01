import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  tap,
  catchError,
  throwError,
  switchMap,
  mergeMap,
  take,
  firstValueFrom,
} from 'rxjs';
import { Movie } from 'src/app/models/Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}`);
  }
  getMovie(movieId: number): Observable<Movie> {
    const url = `${this.apiUrl}/${movieId}`;
    return this.http.get<Movie>(url);
  }
  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }
  getMoviesOrderedByUnwatched(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}?_sort=watched&_order=asc`);
  }
  getMoviesLiked(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}?liked=true`);
  }
  toggleLikedMovie(
    movieId: number | undefined,
    movieLiked: boolean
  ): Observable<Movie> {
    const url = `${this.apiUrl}/${movieId}`;

    return this.http.patch<Movie>(url, { liked: !movieLiked }).pipe(
      tap(() => console.log('Movie toggled successfully')),
      catchError((error) => {
        console.error('Failed to toggle movie liked status', error);
        return throwError(() => error);
      })
    );
  }
  saveMovieComment(movieId: number, comment: string): any {
    const url = `${this.apiUrl}/${movieId}`;

    this.getMovie(movieId).subscribe(
      (movie) => {
        console.log(`Comentários anteriores: ${movie.comments}`);
        const updateComments = (movie.comments).concat([comment]);
        console.log(`Comentários atualizados: ${updateComments}`);

        return this.http.patch<Movie>(url, { comments: updateComments }).subscribe((teste) => {
          console.log('Comments added!')
          
        },
  (error) => {
    // Handle error
    console.error('An error occurred:', error);
  });
      },
      (error) => {
        // Handle error
        console.error('An error occurred:', error);
      }
    );
  }

  toggleWatchedMovie(
    movieId: number | undefined,
    movieWatched: boolean
  ): Observable<Movie> {
    const url = `${this.apiUrl}/${movieId}`;

    return this.http.patch<Movie>(url, { watched: !movieWatched }).pipe(
      tap(() => console.log('Movie toggled successfully')),
      catchError((error) => {
        console.error('Failed to toggle movie liked status', error);
        return throwError(() => error);
      })
    );
  }

  addMovie(movie: Movie) {
    return this.http.post<Movie>(this.apiUrl, movie);
  }
  deleteMovie(movieId: number | undefined): Observable<void> {
    if (movieId !== undefined) {
      const url = `${this.apiUrl}/${movieId}`;
      return this.http.delete<void>(url).pipe(
        tap(() => console.log('Movie deleted successfully')),
        catchError((error: any) => {
          console.error('Failed to delete movie', error);
          return throwError(() => error);
        })
      );
    }
    return throwError(() => 'Invalid movie ID');
  }
}
