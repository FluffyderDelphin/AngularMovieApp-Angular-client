import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-movie-summary',
  templateUrl: './movie-summary.component.html',
  styleUrls: ['./movie-summary.component.scss']
})
export class MovieSummaryComponent implements OnInit {
 
  constructor(@Inject(MAT_DIALOG_DATA)
  public movie:{
    title:string,
    imageurl:any,
    description:string
  }) {

   }

  ngOnInit(): void {
  }

}
