// service qui fournit des méthodes de validation des adresses e-mail et des mots de passe et mail
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginValidationService {
  emailPattern: any = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  passwordPattern : any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  //  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  validateEmail(email: string): boolean {
    return this.emailPattern.test(email);
  }

  validatePassword(password: string): boolean {
    return this.passwordPattern.test(password);
  }
}
