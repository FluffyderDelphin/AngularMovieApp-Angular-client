import { Component, OnInit, Input } from '@angular/core';

import { FetchApiDataService } from '../fetch-api-data.service';

import { MatSnackBar } from '@angular/material/snack-bar';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit {
  @Input() userData = {
    username: '',
    password: '',
    email: '',
    birthday: new Date(),
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      (result: any) => {
        this.dialogRef.close();
        this.snackBar.open(
          `${result.username} sucessfully registerd. Please Login.`,
          'OK',
          {
            duration: 2000,
          }
        );
      },
      (result: any) => {
        this.snackBar.open('registration unsucsessfull', 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
