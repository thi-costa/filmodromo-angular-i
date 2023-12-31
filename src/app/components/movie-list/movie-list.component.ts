import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { MovieModalServiceService } from 'src/app/services/movies/movie-modal-service.service';
import { MovieService } from 'src/app/services/movies/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() liked: boolean = false;
  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private movieModalService: MovieModalServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    if (this.liked) {
      this.getMoviesLiked();
    } else {
      this.movieService.getMoviesOrderedByUnwatched().subscribe((movies) => {
        this.movies = movies;
      });
    }
  }
  getMoviesLiked(): void {
    this.movieService.getMoviesLiked().subscribe((movies) => {
      this.movies = movies;
    });
  }

  toggleWatchedMovie(movie: Movie): void {
    this.movieService
      .toggleWatchedMovie(movie.id, movie.watched)
      .subscribe((updateMovie) => {
        movie.watched = updateMovie.watched;
        if (movie.watched) {
          this.movieModalService
            .openMovieFeedbackModal(movie.id)
            .then((comment) => {
              if (comment) {
                console.log(`User comment: ${comment}`);
              }
            });
        }
      });
  }

  toggleLikedMovie(movie: Movie): void {
    this.movieService
      .toggleLikedMovie(movie.id, movie.liked)
      .subscribe((updateMovie) => {
        movie.liked = updateMovie.liked;
      });
  }

  openMovieDetails(movieId: number | undefined): void {
    this.router.navigate(['/movies', movieId]);
  }

  deleteMovie(movie: Movie): void {
    this.movieService.deleteMovie(movie.id).subscribe(
      () => {
        console.log('Movie deleted successfully');
        // Remove the deleted movie from the local movie list
        this.movies = this.movies.filter((m) => m.id !== movie.id);
      },
      (error) => {
        console.error('Failed to delete movie', error);
      }
    );
  }
}
