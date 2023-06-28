import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRegistrationFormComponent } from './movie-registration-form.component';

describe('MovieRegistrationFormComponent', () => {
  let component: MovieRegistrationFormComponent;
  let fixture: ComponentFixture<MovieRegistrationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieRegistrationFormComponent]
    });
    fixture = TestBed.createComponent(MovieRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
