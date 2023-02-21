import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginValidationService } from '../service/auth-service/login-validation-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthLoginGuard implements CanActivate {
  constructor(
        private router: Router,
        private loginValidationService : LoginValidationService) { }

  canActivate(): boolean {
    if (!this.loginValidationService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['listedeblogs']);
      return false;
    }
  }

}
