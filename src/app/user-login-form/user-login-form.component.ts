import { Component, OnInit,Input} from '@angular/core';
import {FetchApiDataService} from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {


 @Input() userData={username:'',password:''}

 
  constructor( public fetchApiData:FetchApiDataService,
    public dialogRef:MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router:Router) { }

  ngOnInit(): void {
  }
loginUser():void{
  this.fetchApiData.loginUser(this.userData).subscribe((result:any) => {


    this.dialogRef.close(); 
 
    console.log(result.user);
    localStorage.setItem('user',JSON.stringify(result.user));
    localStorage.setItem('token',result.token);
    this.snackBar.open(`Welcome ${result.user.username} !`, 'OK', {
       duration: 2000
    });
    this.router.navigate(['movies']);
   }, (result:any) => {
     this.snackBar.open('Login unsucessful', 'OK', {
       duration: 2000
     });
   });
}
}
