;
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieService } from './services/movies/movie.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatSidenavModule} from "@angular/material/sidenav";
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HomeComponent } from './components/home/home.component'
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MovieFeedbackModalComponent } from './components/moviefeedbackmodal/moviefeedbackmodal.component';
import { MatInputModule } from '@angular/material/input';
import { MovieLikedListComponent } from './components/movie-liked-list/movie-liked-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieCommentsComponent } from './components/movie-comments/movie-comments.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    PageNotFoundComponent,
    HomeComponent,
    MovieFeedbackModalComponent,
    MovieLikedListComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    MovieCommentsComponent,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
