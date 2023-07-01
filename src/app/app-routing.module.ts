import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieLikedListComponent } from './components/movie-liked-list/movie-liked-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'movies/liked',
    component: MovieLikedListComponent,
  },
  {
    path: 'movies/new',
    loadChildren: () =>
      import(
        './modules/movies/movie-registration/movie-registration.module'
      ).then((m) => m.MovieRegistrationModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
