import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserModel } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

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

  constructor(private readonly dialogRef: MatDialogRef<CreateUserComponent>,
              private readonly userService: UsersService,
              private readonly notificationsService: NotificationsService) {
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    const user: UserModel = {
      $key: null,
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value,
      email: this.form.controls.email.value,
    };

    this.userService.createUser(user);
    this.dialogRef.close(user);
    this.notificationsService.success('Successfully created the user');
  }

}
