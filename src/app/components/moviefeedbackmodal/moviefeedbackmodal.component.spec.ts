import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFeedbackModalComponent } from './moviefeedbackmodal.component';

describe('MoviefeedbackmodalComponent', () => {
  let component: MovieFeedbackModalComponent;
  let fixture: ComponentFixture<MovieFeedbackModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieFeedbackModalComponent],
    });
    fixture = TestBed.createComponent(MovieFeedbackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
