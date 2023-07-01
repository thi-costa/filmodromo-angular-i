import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movies/movie.service';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-movie-comments',
  templateUrl: './movie-comments.component.html',
  styleUrls: ['./movie-comments.component.css'],
  standalone: true,
  imports: [MatExpansionModule],
})

export class MovieCommentsComponent implements OnInit{
  panelOpenState = false;
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