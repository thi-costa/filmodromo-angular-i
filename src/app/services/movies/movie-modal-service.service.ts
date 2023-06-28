import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieFeedbackModalComponent } from 'src/app/components/moviefeedbackmodal/moviefeedbackmodal.component';
import {lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieModalServiceService {
  constructor(private dialog: MatDialog) { }

  openMovieFeedbackModal(movieId: number | undefined): Promise<string | undefined> {
    const dialogRef = this.dialog.open(MovieFeedbackModalComponent, {
      width: '400px',
      data: {movieId: movieId},
    });

    return lastValueFrom(dialogRef.afterClosed());
  }
}
