import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = '';

  login(): void {
    this.token = 'MyFakeToken';
    localStorage.setItem('isLoggedIn', 'true');
    console.log('authici', 'isLoggedIn');
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }

  setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  getToken(): string {
    return this.token;
  }
}
