import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginValidationService } from '../../auth/services/login-validation-service.service';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserListComponent implements OnInit {
  titrePage: string = 'Informations du compte';
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
  }

  modifyUser(id: number): void {
    this.router.navigate(['/auth/creeruncompte'], { queryParams: { id: id } });
  }

  deleteUser(id: number): void {
    const confirmed = confirm('Vous êtes sûr de vouloir effacer cet utilisateur? vous allez être deconnecté !');
    if (confirmed) {
      this.userService.deleteUser(id);
      this.loginValidationService.logOut();
    }
  }

  returnBlogList(): void {
    this.router.navigate(['/blog/listedeblogs']);
  }
}

