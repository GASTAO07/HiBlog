import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginValidationService } from '../../services/login-validation.service/login-validation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginValidationService : LoginValidationService) { }

  canActivate(): boolean {
    if (this.loginValidationService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
