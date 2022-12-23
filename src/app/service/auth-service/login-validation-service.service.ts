// service qui fournit des méthodes de validation des adresses e-mail et des mots de passe et mail
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class LoginValidationService {
  emailPattern: any = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  passwordPattern : any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  constructor(
    private router: Router) {}

  validateEmail(email: string): boolean {
    return this.emailPattern.test(email);
  }

  validatePassword(password: string): boolean {
    return this.passwordPattern.test(password);
  }

  // voir si l'utilisateur est logged
  // isLoggedInPageblogComponent qui vérifie si l’état de connexion de l’utilisateur est 'true. Si l’utilisateur est connecté, la méthode renvoie 'truetrue, sinon il retourne 'false
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  // ------------------------------------------------------------------------------------

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigateByUrl('auth/login');
  }
}
