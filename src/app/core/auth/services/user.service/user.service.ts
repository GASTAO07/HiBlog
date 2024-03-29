import { Injectable } from "@angular/core";
import { User } from 'src/app/features/user/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  setUser(user: User): void {
    const users: User[] = this.getUsers();
    users.push(user);
    this.setUsers(users);
  }

  getUsers(): User[] {
    const usersInLocalStorage = JSON.parse(localStorage.getItem('users'));
    if (usersInLocalStorage) {
      return usersInLocalStorage;
    } else {
      return [];
    }
  }

  setUsers(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }

  checkUser(userToCheck: User): boolean {
    const users: User[] = this.getUsers();
    const index = users.findIndex((user: User): boolean => user.email === userToCheck.email);
    if (index !== -1) {
      return users[index].motdepasse.pwd === userToCheck.motdepasse.pwd;
    } else {
      return false;
    }
  }

  updateUser(user: User): void {
    const users = this.getUsers();
    const index = users.findIndex((user: User): boolean => user.id === user.id);
    if (index !== -1) {
      users[index] = user;
      this.setUsers(users);
    }
  }

  onContinueSet(usersetcheck: User): void {
    const users: User[] = this.getUsers();
    const index = users.findIndex((user: User): boolean => user.email === usersetcheck.email);
    if (index !== -1) {
      localStorage.setItem('currentUserId', users[index].id.toString());
    }
  }

  deleteUser(id: number): void {
    const users: User[] = this.getUsers();
    const index = users.findIndex((user: User): boolean => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      localStorage.removeItem('currentUserId');
      this.setUsers(users);
    }
  }

  getUserById(id: number): User {
    const users = this.getUsers();
    const user = users.find((user: User): boolean => user.id === id);
    return user;
  }
}
