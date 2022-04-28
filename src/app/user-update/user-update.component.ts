import { Component, OnInit, Input } from '@angular/core';

import { FetchApiDataService } from '../fetch-api-data.service';

import { MatSnackBar } from '@angular/material/snack-bar';

import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent implements OnInit {
  string: any = localStorage.getItem('user');
  user: any = JSON.parse(this.string);
  @Input() userData = {
    username: this.user.username,
    password: '',
    email: this.user.email,
    birthday: this.user.birthday.substr(0, 10),
  };
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserUpdateComponent>,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}

  ngOnInit(): void {}

  updateUser(): void {
    this.fetchApiData.updateUser(this.user.username, this.userData).subscribe(
      (result: any) => {
        this.dialogRef.close();
        this.snackBar.open(
          `${result.username} sucessfully updated Please Login.`,
          'OK',
          {
            duration: 2000,
          }
        );
        localStorage.clear();
        this.router.navigate(['welcome']);
      },
      (result: any) => {
        this.snackBar.open('Update unsucsessfull', 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
