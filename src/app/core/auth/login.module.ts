import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { CreerUncompteComponent } from './components/creer-uncompte/creer-uncompte.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { AuthLoginGuard } from './guards/auth.loginguard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/login'},
  { path: 'login', component: LoginComponent, canActivate: [AuthLoginGuard] },
  { path: 'creeruncompte', component: CreerUncompteComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthGuard, AuthLoginGuard]
})
export class AuthModule { }
