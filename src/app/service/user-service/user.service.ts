import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  setUser(user: User): void {
    // 1- Récupérer le tableau d'utilisateurs
    const users: User[] = this.getUsers();
    // 2- Ajouter mon utilisateur passé en paramètre au tableau
    users.push(user);
    // 3- Sauvegarder le nouveau tableau dans le LocalStorage
    this.setUsers(users);
  }

  // Methode pour aller chercher le tableau d'utilisateur
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
    // Récupérer le tableau d'utilisateur
    const users: User[] = this.getUsers();
    // Vérifier si l'email existe dans la liste d'utilisateurs
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
    // Récupérer le tableau d'utilisateur
    const users: User[] = this.getUsers();
    const index = users.findIndex((user: User): boolean => user.email === usersetcheck.email);
    if (index !== -1) {
      localStorage.setItem('currentUserId', users[index].id.toString());
    }
  }

  deleteUser(id: number): void {
    // Récupérer le tableau d'utilisateur
    const users: User[] = this.getUsers();
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
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
