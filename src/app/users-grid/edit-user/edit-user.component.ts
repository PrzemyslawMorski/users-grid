import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserModel } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {

  form: FormGroup = new FormGroup({
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

  constructor(private readonly dialogRef: MatDialogRef<EditUserComponent>,
              private readonly userService: UsersService,
              private readonly notificationsService: NotificationsService,
              @Inject(MAT_DIALOG_DATA) public data: UserModel) {
    if (data) {
      this.form.setValue({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email
      });
    }
  }

  async onSubmit(): Promise<void> {
    if (!this.form.valid) {
      return;
    }

    const user: UserModel = {
      $key: this.data.$key,
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value,
      email: this.form.controls.email.value,
    };

    await this.userService.updateUser(user);
    this.dialogRef.close(user);
    this.notificationsService.success('Successfully updated the user');
  }

}
