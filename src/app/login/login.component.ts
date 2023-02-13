import { LoginValidationService } from 'src/app/service/auth-service/login-validation-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { LoginModel } from 'src/app/models/LoginModel';
import { TableauEmailPasswordService } from 'src/app/service/tableau-email-password/tableau-email-password.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  isDisabled: boolean = true;
  loginmodel: LoginModel;

  constructor(
    private router: Router,
    private auth: AuthService,
    public route: ActivatedRoute,
    private loginValidationService: LoginValidationService,
    private tableauEmailPasswordService: TableauEmailPasswordService
  ) { }

  ngOnInit(): void {
    this.loginValidationService.isLoggedOut();
    this.loginmodel = new LoginModel({
      email: '', motdepasse: { pwd: '' },
      terms: false
    });
  }

  controle(): void {
    if (
      !this.loginValidationService.validateEmail(this.loginmodel.email) ||
      !this.loginValidationService.validatePassword(this.loginmodel.motdepasse.pwd)
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

    this.auth.setUser({ email: this.loginmodel.email });

    this.router.navigate(['listedeblogs']);
  }

  creerUncompte(): void {
    if (this.tableauEmailPasswordService.hasEmail(this.loginmodel.email)) {
      alert('Désolé, cet e-mail existe déjà !');
      return;
    }
    this.tableauEmailPasswordService.addEmailPassword(this.loginmodel.email, this.loginmodel.motdepasse.pwd);
    this.router.navigateByUrl('creeruncompte');
  }
}
