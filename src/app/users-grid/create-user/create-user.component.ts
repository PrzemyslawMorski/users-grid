import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserModel } from '../../models/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  form: FormGroup;

  firstNameControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(128)
  ]);

  lastNameControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(128)
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(formBuilder: FormBuilder, public dialogRef: MatDialogRef<CreateUserComponent>) {
    this.form = formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(128)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(128)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    const user: UserModel = {
      id: undefined,
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value,
      email: this.form.controls.email.value,
    };

    this.dialogRef.close(user);
  }

}
