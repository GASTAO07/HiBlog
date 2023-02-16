import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = '';

  login(): void {
    this.token = 'MyFakeToken';
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }

  getToken(): string {
    return this.token;
  }
}
