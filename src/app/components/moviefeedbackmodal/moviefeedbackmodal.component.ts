import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MovieService } from 'src/app/services/movies/movie.service';


@Component({
  selector: 'app-moviefeedbackmodal',
  templateUrl: './moviefeedbackmodal.component.html',
  styleUrls: ['./moviefeedbackmodal.component.css'],
})
export class MovieFeedbackModalComponent implements OnInit {
  commentForm: FormGroup = new FormGroup({
    comment: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<MovieFeedbackModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { movieId: number },
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      comment: [[''], Validators.nullValidator],
    });
  }

  saveComment(): void {
    const comment = this.commentForm.get('comment')?.value;
    const movieId = this.data.movieId;

    console.log(
      `[MODAL COMPONENT] - Id: ${movieId}; Comment: ${comment};`
    );

    this.movieService.saveMovieComment(movieId, comment);
    this.dialogRef.close();
  }
}