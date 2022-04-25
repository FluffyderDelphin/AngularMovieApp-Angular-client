import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieUserFavoriteComponent } from './movie-user-favorite.component';

describe('MovieUserFavoriteComponent', () => {
  let component: MovieUserFavoriteComponent;
  let fixture: ComponentFixture<MovieUserFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieUserFavoriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieUserFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
