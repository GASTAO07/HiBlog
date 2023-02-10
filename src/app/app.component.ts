import { Component, OnInit } from '@angular/core';
import { LoginValidationService } from './service/auth-service/login-validation-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  isUserLoggedIn: boolean = false;

  constructor(
    private loginValidationService: LoginValidationService,
  ) { }

  ngOnInit(): void {
    console.log('debutappcomp is user : ', this.isUserLoggedIn);
    this.isUserLoggedIn = this.loginValidationService.isLoggedIn();
    console.log('finappcomp is user : ', this.isUserLoggedIn);
  }
}
