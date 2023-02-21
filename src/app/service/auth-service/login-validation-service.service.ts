// service qui fournit des méthodes de validation des adresses e-mail et des mots de passe et mail
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class LoginValidationService {
  emailPattern: any = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  passwordPattern: any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  isDisabled: boolean = true;

  constructor(
    private auth: AuthService,
    private router: Router) { }

  validateEmail(email: string): boolean {
    return this.emailPattern.test(email);
  }

  validatePassword(password: string): boolean {
    return this.passwordPattern.test(password);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  isLoggedOut(): void {
    localStorage.setItem('isLoggedIn', 'false');

  }

  onContinue(): void {
    if (this.isDisabled) {
      return;
    }
    localStorage.setItem('isLoggedIn', 'true');
    this.auth.login();
    this.router.navigate(['listedeblogs']);
  }
}
