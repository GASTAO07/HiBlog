// service qui fournit des méthodes de validation des adresses e-mail et des mots de passe et mail
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class LoginValidationService {
  emailPattern: any = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  passwordPattern : any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  isDisabled: boolean = true;

  constructor(
    private auth: AuthService,
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

    // localStorage.setItem('isLoggedIn', 'true'); il est pas possible d'associer un string à un bool
  }

  // ------------------------------------------------------------------------------------

  isLoggedOut(): void {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigateByUrl('auth/login');
  }

  // Essayer de déclarer isLoggedOut as

  onContinue(): void {
    if (this.isDisabled) {
      return;
    }
    localStorage.setItem('isLoggedIn', 'true');
    this.auth.login();
    this.router.navigate(['listedeblogs']);
  }
}
