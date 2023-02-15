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

  getUser() : User {
    return {
      id: 0,
      email: '',
      nom: '',
      prenom: '',
      motdepasse: { pwd: '' }
    };
  }

  getUsers(): User[] {
    // Si JSON.parse(localStorage.getItem('users') est défini
    // Alors je renvoie JSON.parse(localStorage.getItem('users')
    // Sinon, je renvoie un tableau vide
    const usersInLocalStorage = JSON.parse(localStorage.getItem('users'));
    if (usersInLocalStorage) {
      return usersInLocalStorage;
    }else {
      return [];
    }
  }

  setUsers(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }
}
