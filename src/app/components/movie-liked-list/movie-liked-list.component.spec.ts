import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLikedListComponent } from './movie-liked-list.component';

describe('MovieLikedListComponent', () => {
  let component: MovieLikedListComponent;
  let fixture: ComponentFixture<MovieLikedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieLikedListComponent]
    });
    fixture = TestBed.createComponent(MovieLikedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
