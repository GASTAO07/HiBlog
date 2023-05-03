import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { CommonModule } from '@angular/common';
import { CreerUncompteComponent } from './features/login/components/creer-uncompte/creer-uncompte.component';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './features/user/user.component';
import { UserService } from './core/auth/services/user.service/user.service';
import { LoginValidationService } from './core/auth/services/login-validation.service/login-validation.service';
import { SharedModule } from './shared/modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreerUncompteComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ],
  providers: [UserService, LoginValidationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
