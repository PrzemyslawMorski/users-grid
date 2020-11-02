import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserModel } from '../../models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {

  form: FormGroup;

  constructor(formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<EditUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: UserModel) {

    this.form = formBuilder.group({
      firstName: new FormControl(data?.firstName, [
        Validators.required,
        Validators.maxLength(128)
      ]),
      lastName: new FormControl(data?.lastName, [
        Validators.required,
        Validators.maxLength(128)
      ]),
      email: new FormControl(data?.email, [
        Validators.required,
        Validators.email
      ])
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    const user: UserModel = {
      id: this.data.id,
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value,
      email: this.form.controls.email.value,
    };

    this.dialogRef.close(user);
  }

}
