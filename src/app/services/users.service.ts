import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDatabaseModel, UserModel } from '../models/user';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private fireDatabase: AngularFireDatabase) {
  }

  userList: AngularFireList<UserDatabaseModel>;

  getUsers(): Observable<UserModel[]> {
    this.userList = this.fireDatabase.list('users');
    return this.userList.valueChanges().pipe(map(users => {
      return users.map(((value, index) => ({
        $key: index.toString(),
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email
      } as UserModel)));
    }));
  }

  createUser(user: UserModel): void {
    this.userList.push({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    } as UserDatabaseModel);
  }

  updateUser(user: UserModel): Promise<void> {
    return this.userList.update(user.$key,
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      });
  }

  deleteUser(key: string): Promise<void> {
    return this.userList.remove(key);
  }
}
