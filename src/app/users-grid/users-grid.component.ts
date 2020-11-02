import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.scss']
})
export class UsersGridComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email'];

  users$: Observable<UserModel[]>;

  constructor(private readonly usersService: UsersService) {
    this.users$ = usersService.getAll();
  }

  ngOnInit(): void {
  }

  createUser(): void {

  }

  editUser(): void {

  }

  deleteUser(): void {

  }

}
