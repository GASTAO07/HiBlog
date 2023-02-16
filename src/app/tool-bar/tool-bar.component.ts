import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginValidationService } from '../service/auth-service/login-validation-service.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {
  isUserLoggedIn: boolean = false;

  ngOnInit(): void {
    this.isUserLoggedIn = this.loginValidationService.isLoggedIn();
  }

  constructor(
    private loginValidationService: LoginValidationService,
    private router: Router) {}

  goToBloglist(): void {
    this.router.navigateByUrl('listedeblogs');
  }

  logout() : void {
    this.router.navigateByUrl('auth/login');
  }
}


