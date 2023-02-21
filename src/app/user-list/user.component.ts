import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginValidationService } from '../service/auth-service/login-validation-service.service';
import { User } from '../interfaces/user.interface';
import { UserService } from '../service/user-service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserListComponent implements OnInit {
  user: User;
  newNom: string;
  newPrenom: string;
  newEmail: string;
  newMotdepasse: string;

  constructor(private userService: UserService,
    private router: Router,
    private loginValidationService: LoginValidationService) { }

  ngOnInit(): void {
    const currentUserId = Number(localStorage.getItem('currentUserId'));
    const currentUser: User = this.userService.getUserById(currentUserId);
    if (currentUser === undefined) {
      return;
    } else {
      this.user = currentUser;
    }
    this.userService.getUsers();
  }

  modifyUser(id: number): void {
    this.router.navigate(['creeruncompte'], { queryParams: { id: id } });
  }

  deleteUser(id: number): void {
    const confirmed = confirm('Vous êtes sûr de vouloir effacer cet utilisateur? vous allez être deconnecté !');
    if (confirmed) {
      this.userService.deleteUser(id);
      this.userService.getUsers();
      this.loginValidationService.isLoggedOut();
      this.router.navigateByUrl('auth/login');
    }
  }

  returnBlogList(): void {
    this.router.navigate(['listedeblogs']);
  }

}

