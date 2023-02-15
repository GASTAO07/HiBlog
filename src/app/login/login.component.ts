import { LoginValidationService } from 'src/app/service/auth-service/login-validation-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { TableauEmailPasswordService } from 'src/app/service/tableau-email-password/tableau-email-password.service';
import { User } from '../interfaces/user.interface';

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
    private auth: AuthService,
    public route: ActivatedRoute,
    private loginValidationService: LoginValidationService,
    private tableauEmailPasswordService: TableauEmailPasswordService
  ) { }

  ngOnInit(): void {
    this.loginValidationService.isLoggedOut();
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
    localStorage.setItem('isLoggedIn', 'true');
    this.auth.login();
    this.router.navigate(['listedeblogs']);
  }

  creerUncompte(): void {
    if (this.tableauEmailPasswordService.hasUser(this.user.email)) {
      alert('Désolé, cet e-mail existe déjà !');
      return;
    }
    this.tableauEmailPasswordService.addUser(this.user);
    this.router.navigateByUrl('creeruncompte');
  }
}
