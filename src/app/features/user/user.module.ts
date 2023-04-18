import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/user/profile'},
  { path: 'profile', component: UserListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class UserModule { }
