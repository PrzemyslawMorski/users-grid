export interface UserModel extends UserDatabaseModel {
  $key: string;
}

export interface UserDatabaseModel {
  firstName: string;
  lastName: string;
  email: string;
}
