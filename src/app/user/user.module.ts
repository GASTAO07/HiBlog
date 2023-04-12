import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/user/profile'},
  { path: 'profile', component: UserListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthGuard]
})
export class UserModule { }
