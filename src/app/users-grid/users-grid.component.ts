import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UserModel } from '../models/user';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersGridComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'actions'];

  usersDataSource = new MatTableDataSource<UserModel>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  searchPhrase: string;

  constructor(private readonly usersService: UsersService,
              private readonly dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => {
      this.usersDataSource.data = users;
      this.usersDataSource.paginator = this.paginator;
      this.usersDataSource.sort = this.sort;
      this.usersDataSource.filterPredicate = (data, filter) => {
        return this.displayedColumns.some(column => {
          return column !== 'actions' && data[column].toLowerCase().includes(filter);
        });
      };
    });
  }

  createUser(): void {
    this.dialog.open(CreateUserComponent);
  }

  editUser(user: UserModel): void {
    this.dialog.open(EditUserComponent, { data: user });
  }

  deleteUser(userGridModel: UserModel): void {
    this.usersService.deleteUser(userGridModel.$key);
  }

  onSearchClear(): void {
    this.searchPhrase = '';
    this.applyFilter();
  }

  applyFilter(): void {
    this.usersDataSource.filter = this.searchPhrase.trim().toLowerCase();
  }
}
