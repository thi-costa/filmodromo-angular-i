import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movies/movie.service';

@Component({
  selector: 'app-movie-registration-form',
  templateUrl: './movie-registration-form.component.html',
  styleUrls: ['./movie-registration-form.component.css'],
})
export class MovieRegistrationFormComponent implements OnInit {
  movieForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      name: ['', Validators.required],
      synopsis: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.movieForm.invalid) {
      return;
    }

    const newMovie: Movie = {
      name: this.movieForm.value.name,
      synopsis: this.movieForm.value.synopsis,
      watched: false,
      liked: false,
      comments: [],
    };

    this.movieService.addMovie(newMovie).subscribe(
      (response) => {
        // Successful response
        console.log("Movie added successfully!", response);
      }, (error) => {
        console.error('Error adding movie', error);
      }
    );
    this.movieForm.reset();
  }
}
