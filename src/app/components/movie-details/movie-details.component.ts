import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movies/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: number | null =
    Number(this.route.snapshot.paramMap.get('id')) ?? null;
  movie: Movie | undefined;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.movieId !== null) {
      console.log(`Log 2 (id): ${this.movieId}`)
      this.getMovieDetails(this.movieId);
    }
  }

  getMovieDetails(movieId: number): void {
    this.movieService.getMovieById(movieId).subscribe((movie) => {
      console.log(movie.id);
      this.movie = movie;
    });
    console.log(`Log 1: ${this.movie}`);
  }
}
