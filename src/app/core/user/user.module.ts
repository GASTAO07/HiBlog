import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

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
  providers: [AuthGuard]
})
export class UserModule { }
