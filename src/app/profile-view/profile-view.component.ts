import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
   string:any = localStorage.getItem('user');
   user:any = JSON.parse(this.string);
  constructor() { }

  ngOnInit(): void {
  }

}
