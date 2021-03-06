import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-movie-genre-view',
  templateUrl: './movie-genre-view.component.html',
  styleUrls: ['./movie-genre-view.component.scss'],
})
export class MovieGenreViewComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public genre: {
      name: string;
      description: string;
    }
  ) {}
  ngOnInit(): void {}
}
