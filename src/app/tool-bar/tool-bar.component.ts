import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginValidationService } from '../service/auth-service/login-validation-service.service';
import { AuthService } from '../service/auth-service/auth.service';
import { UserService } from '../service/user-service/user.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {
  isUserLoggedIn: boolean = false;
  isValidBlog: boolean = true;
  user: User;

  ngOnInit(): void {
    const currentUserId = Number(localStorage.getItem('currentUserId'));
    const currentUser: User = this.userService.getUserById(currentUserId);
    if (currentUser === undefined) {
      return;
    } else {
      this.user = currentUser;
    }
    this.isUserLoggedIn = this.loginValidationService.isLoggedIn();
  }

  constructor(
    private loginValidationService: LoginValidationService,
    private router: Router,
    private auth: AuthService,
    private userService: UserService) {}

  goToBloglist(): void {
    this.router.navigateByUrl('listedeblogs');
  }

  logout() : void {
    this.loginValidationService.isLoggedOut();
    localStorage.removeItem('currentUserId');
    this.router.navigateByUrl('auth/login');
  }

  userInfo() : void {
    this.router.navigateByUrl('user');
  }
}


