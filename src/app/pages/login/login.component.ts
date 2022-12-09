import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { LoginModel } from 'src/app/models/LoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginmodel: LoginModel;
  isDisabled: boolean = true;
  loginModel: any;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,

    private auth: AuthService) { }

  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group(
    //   {
    //     email: ['', [Validators.required, Validators.email]],
    //     motdepasse: ['', [Validators.required]],
    //   }

    // );
    this.loginmodel = new LoginModel({
      email: '', motdepasse: { pwd: '' },
      terms: false
    });

    // this.loginmodel = new LoginModel{}
  }



  controle(): void {
    console.log('ici controle()', this.loginmodel.email, this.loginmodel.motdepasse);
    if (!this.loginmodel.motdepasse.pwd || !this.loginmodel.email) {
      this.isDisabled = true;

    } else {
      this.isDisabled = false;
      // const pattern = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm);
    }
  }

  submitLogin(): void {
    // debugger; // Pour voire si ça marche
    // const donnesLogin = this.loginForm.getRawValue();
  }

  onContinue(): void {
    this.auth.login();
    this.router.navigateByUrl('pageblog');

  }

  creerUncompte(): void {
    this.router.navigateByUrl('CreerUncompte');
    sessionStorage.setItem(this.loginmodel.email, this.loginmodel.motdepasse.pwd);

    // getemail(): void {
    //   return sessionStorage.getItem(this.loginmodel.email);
    // }

    // getmotdepasse() {
    //   sessionStorage.getItem(this.loginmodel.motdepasse.pwd);
    // }

  }



  //   public onSubmit({ value, valid}: { value: LoginModel, valid: boolean }) {
  //     this.loginmodel = value;
  //     console.log( this.loginmodel);
  //     console.log("valid: " + valid);
  // }

  // Stocker le mot de passe

}

