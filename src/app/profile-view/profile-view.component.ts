import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';
import { UserUpdateComponent } from '../user-update/user-update.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
   string:any = localStorage.getItem('user');
   user:any = JSON.parse(this.string);
   constructor(public dialog: MatDialog,
    public router:Router,
    public fetchApiData:FetchApiDataService,    
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
 openUserUpdateDialog():void{
   this.dialog.open(UserUpdateComponent,{
     width:'300px'
   })
 }

 deleteUser():void{
   if(confirm('Delete Account ?')) {


 this.fetchApiData.deleteUser(this.user._id).subscribe((result:any)=>{
   localStorage.clear();
   this.router.navigate(['welcome'])
 },(result:any)=>{
   this.snackBar.open('User was not deleted','OK',{
     duration:2000
   })
 })
  }


 }
}
