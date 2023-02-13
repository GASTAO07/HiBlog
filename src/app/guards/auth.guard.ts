import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router) { }

  canActivate(): boolean {
    if (this.auth.getToken()) {
      return true;
    } else {
      this.router.navigateByUrl('auth/login');
      return false;
    }
  }

}
