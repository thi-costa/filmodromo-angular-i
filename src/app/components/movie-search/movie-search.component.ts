import { Component } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movies/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent {
  searchTerm: string = '';
  searchResults: Movie[] = [];

  constructor(private movieService: MovieService) {}

  search() {
    if (this.searchTerm) {
      this.movieService.searchMovies(this.searchTerm).subscribe((results) => {
        this.searchResults = results;
      });
    } else {
      this.searchResults = [];
    }
  }
}
