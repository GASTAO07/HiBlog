import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { LoginModel } from 'src/app/models/LoginModel';
import { __values } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginmodel!: LoginModel;
  isDisabled: boolean = true;
  loginForm!: FormGroup;
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
      email: "", motdepasse: { pwd: "" },
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
      var pattern = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm);
    }
  }

  submitLogin(): void {
    debugger; //Pour voire si ça marche
    var donnesLogin = this.loginForm.getRawValue();
  }

  onContinue(): void {
    this.auth.login();
    this.router.navigateByUrl('pageblog');

  }

  CreerUncompte(): void {
    this.router.navigateByUrl('CreerUncompte');
    sessionStorage.setItem(this.loginmodel.email, this.loginmodel.motdepasse.pwd)
  
    getemail() {
      return sessionStorage.getItem(this.loginmodel.email)
    }
  
    getmotdepasse() {
      sessionStorage.getItem(this.loginmodel.motdepasse.pwd);
    }
  
  }

  

  //   public onSubmit({ value, valid}: { value: LoginModel, valid: boolean }) {
  //     this.loginmodel = value;
  //     console.log( this.loginmodel);
  //     console.log("valid: " + valid);
  // }

  // Stocker le mot de passe

}
