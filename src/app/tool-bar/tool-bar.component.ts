import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginValidationService } from '../service/auth-service/login-validation-service.service';
import { AuthService } from '../service/auth-service/auth.service';
import { UserService } from '../service/user.service';
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
    const currentUser: User = this.userservice.getUserById(currentUserId);
    // Si currentUser est undefined, renvoyer une erreur
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
    private userservice: UserService) {}

  goToBloglist(): void {
    this.router.navigateByUrl('listedeblogs');
  }

  logout() : void {
    this.loginValidationService.isLoggedOut();
    localStorage.removeItem('currentUserId');
    this.router.navigateByUrl('auth/login');
  }

  userList() : void {
    this.router.navigateByUrl('userlist');
  }
}


