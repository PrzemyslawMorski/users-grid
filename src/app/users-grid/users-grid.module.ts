import {NgModule} from '@angular/core';
import {UsersGridComponent} from './users-grid.component';
import {EditUserComponent} from '../edit-user/edit-user.component';
import {CreateUserComponent} from '../create-user/create-user.component';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    UsersGridComponent,
    EditUserComponent,
    CreateUserComponent
  ],
  exports: [
    UsersGridComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UsersGridModule {
}
