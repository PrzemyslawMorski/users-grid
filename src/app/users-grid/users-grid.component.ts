import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { UsersService } from './users.service';
import { UserModel } from '../models/user';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersGridComponent implements AfterViewInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'actions'];

  usersDataSource = new MatTableDataSource<UserModel>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<UserModel>;
  searchValue: string;

  constructor(private readonly usersService: UsersService,
              private readonly dialog: MatDialog,
              private readonly changeDetectorRef: ChangeDetectorRef,
              private readonly snackBar: MatSnackBar) {
  }

  ngAfterViewInit(): void {
    this.usersService.getAll().subscribe(users => {
      setTimeout(() => {
        this.usersDataSource.data = users;
        this.usersDataSource.filterPredicate = this.getFilterPredicate();
        this.usersDataSource.paginator = this.paginator;
        this.usersDataSource.sort = this.sort;
      });
    });
  }

  createUser(): void {
    this.dialog.open(CreateUserComponent).afterClosed().subscribe(user => {
      if (user) {
        this.usersDataSource.data.push(user);
        this.table.renderRows();
        this.changeDetectorRef.detectChanges();
        this.snackBar.open('Successfully created a user');
      }
    });
  }

  editUser(user: UserModel): void {
    this.dialog.open(EditUserComponent, { data: user }).afterClosed().subscribe(result => {
      if (result) {
        user = { ...result, id: user.id };
        this.table.renderRows();
        this.changeDetectorRef.detectChanges();
        this.snackBar.open('Successfully edited the user');
      }
    });
  }

  deleteUser(userGridModel: UserModel): void {
    const indexOfUser = this.usersDataSource.data.indexOf(userGridModel);
    this.usersDataSource.data.splice(indexOfUser, 1);
    this.table.renderRows();
    this.changeDetectorRef.detectChanges();
    this.snackBar.open('Successfully deleted the user');
  }

  applyFilter($event: any): void {
    this.usersDataSource.filter = $event.trim().toLowerCase();
  }

  getFilterPredicate(): (row: UserModel, filter: string) => boolean {
    return (row: UserModel, filter: string) => {
      // split string per '$' to array
      const matchFilter = [];

      // Fetch data from row
      const customFilterDD = row.firstName.toLowerCase().includes(filter) ||
        row.lastName.toLowerCase().includes(filter) ||
        row.email.toLowerCase().includes(filter);

      // push boolean values into array
      matchFilter.push(customFilterDD);

      // return true if all values in array is true
      // else return false
      return matchFilter.every(Boolean);
    };
  }
}
