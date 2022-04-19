import { Component, OnInit,Input} from '@angular/core';
import {FetchApiDataService} from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {
 @Input() userData={username:'',password:''}
  constructor( public fetchApiData:FetchApiDataService,
    public dialogRef:MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
loginUser():void{
  this.fetchApiData.loginUser(this.userData).subscribe((result:any) => {


    this.dialogRef.close(); 
    console.log(result.user);
    localStorage.setItem('user',result.user);
    localStorage.setItem('token',result.token);
    this.snackBar.open(result, 'OK', {
       duration: 2000
    });
   }, (result:any) => {
     this.snackBar.open(result, 'OK', {
       duration: 2000
     });
   });
}
}
