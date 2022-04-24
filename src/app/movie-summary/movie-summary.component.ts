import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-summary',
  templateUrl: './movie-summary.component.html',
  styleUrls: ['./movie-summary.component.scss']
})
export class MovieSummaryComponent implements OnInit {
   movie:any;
  constructor(public router:Router) {
    this.movie = this.router.getCurrentNavigation()?.extras.state;
   }

  ngOnInit(): void {
  }
onBackClick():void{
this.router.navigate(['movies']);
}
}
