import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = '';

  login(): void {
    this.token = 'MyFakeToken';
    // sLoggedIn sera définie sur true lorsque la méthode de connexion sera appelée et l'utilisateur pourra voir le composant de la barre d'outils.
    localStorage.setItem('isLoggedIn', 'true');
    console.log('authici', 'isLoggedIn');
  }

  getToken(): string {
    return this.token;
  }
}
