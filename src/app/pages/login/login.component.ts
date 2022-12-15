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
  emailPattern: any;

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

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    console.log('ici controle()', this.loginmodel.email, this.loginmodel.motdepasse);

    // if (!emailPattern.test(this.loginmodel.email) || !passwordPattern.test(this.loginmodel.motdepasse.pwd)) {
    if ((!emailPattern.test(this.loginmodel.email) || !passwordPattern.test(this.loginmodel.motdepasse.pwd))) {
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
    if (this.isDisabled) {
      return;
    }
    // le statut de connexion de l’utilisateur dans le stockage local en appelant 'localStorage.setItem Méthode et passage true comme valeur
    localStorage.setItem('isLoggedIn', 'true');

    this.auth.login();
    this.router.navigateByUrl('pageblog');
  }

  creerUncompte(): void {
    // Voir si le mail existe déjà
    if (sessionStorage.getItem(this.loginmodel.email)) {
      // message d'erreyr
      alert('Wow vous avez déjà un compte');
      return;
    }

    // Service
    // Create a new account
    this.router.navigateByUrl('CreerUncompte');
    sessionStorage.setItem(this.loginmodel.email, this.loginmodel.motdepasse.pwd);
  }

  // Récup les infos du compte
  getemail(): string {
    return sessionStorage.getItem(this.loginmodel.email);
  }

  getmotdepasse(): void {
    sessionStorage.getItem(this.loginmodel.motdepasse.pwd);
  }
}

// récupérer les données stockées à l’aide de 'sessionStorage.getItem


//   public onSubmit({ value, valid}: { value: LoginModel, valid: boolean }) {
//     this.loginmodel = value;
//     console.log( this.loginmodel);
//     console.log("valid: " + valid);
// }

// Stocker le mot de passe

