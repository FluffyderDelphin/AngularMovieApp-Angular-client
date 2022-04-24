import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-director-view',
  templateUrl: './movie-director-view.component.html',
  styleUrls: ['./movie-director-view.component.scss']
})
export class MovieDirectorViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)
  public director:{
    name:string,
    bio:string,
    birth:any,
    death:any,
  }) { }

  ngOnInit(): void {
  }

}
