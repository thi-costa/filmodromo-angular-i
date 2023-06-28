import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRegistrationRoutingModule } from './movie-registration-routing.module';
import { MovieRegistrationComponent } from './movie-registration.component';
import { MovieRegistrationFormComponent } from 'src/app/components/movie-registration-form/movie-registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [MovieRegistrationComponent, MovieRegistrationFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MovieRegistrationRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
  ],
})
export class MovieRegistrationModule {}
