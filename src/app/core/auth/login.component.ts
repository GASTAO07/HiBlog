import { LoginValidationService } from './services/login-validation-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/interfaces/user.interface';
import { UserService } from '../user/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  isDisabled: boolean = true;
  user: User = {
    id: 0,
    email: '',
    motdepasse: { pwd: '', confirmPwd: '' }
  };

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private loginValidationService: LoginValidationService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loginValidationService.logOut();
  }

  controle(): void {
    if (
      !this.loginValidationService.validateEmail(this.user.email) ||
      !this.loginValidationService.validatePassword(this.user.motdepasse.pwd)
    ) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

  onContinue(): void {
    if (this.isDisabled) {
      return;
    }
    if (this.userService.checkUser(this.user)) {
      this.loginValidationService.isLoggedIn();
      this.userService.onContinueSet(this.user);
      this.router.navigateByUrl('/blog/listedeblogs');
    }
  }

  creerUncompte(): void {
    if (this.userService.checkUser(this.user)) {
      alert('Désolé, cet e-mail existe déjà !');
      return;
    }
    this.router.navigateByUrl('/auth/creeruncompte');
  }
}
