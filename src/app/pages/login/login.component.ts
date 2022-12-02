import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{

  loginForm! : FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private router:Router,
    private auth: AuthService){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]], 
        motdepasse : ['', [Validators.required]],
      }
      
    );   
  }

  submitLogin()
  {
    debugger //Pour voire si ça marche
    var donnesLogin = this.loginForm.getRawValue(); 
  }

  onContinue():void{
    this.auth.login(); 
    this.router.navigateByUrl('pageblog');
    }

    CreerUncompte():void{
      this.router.navigateByUrl('CreerUncompte');
      }
}
