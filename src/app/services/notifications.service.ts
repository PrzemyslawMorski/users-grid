import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(public snackBar: MatSnackBar) {
  }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: ['notification']
  };


  success(msg): void {
    this.config.panelClass = ['notification', 'success'];
    this.snackBar.open(msg, '', this.config);
  }
}