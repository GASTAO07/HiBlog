import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { CreerUncompteComponent } from './components/creer-uncompte/creer-uncompte.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/login'},
  { path: 'login', component: LoginComponent },
  { path: 'creeruncompte', component: CreerUncompteComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class AuthModule { }
