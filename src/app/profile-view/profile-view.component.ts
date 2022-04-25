import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserUpdateComponent } from '../user-update/user-update.component';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
   string:any = localStorage.getItem('user');
   user:any = JSON.parse(this.string);
   constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
 openUserUpdateDialog():void{
   this.dialog.open(UserUpdateComponent,{
     width:'300px'
   })
 }
}
