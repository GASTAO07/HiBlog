import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBlogComponent } from './page-blog/page-blog.component';
import { CreerUncompteComponent } from './creer-uncompte/creer-uncompte.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { UserListComponent } from './user-list/user.component';
import { AuthLoginGuard } from './guards/auth.loginguard';
const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent, canActivate: [AuthLoginGuard] },
      { path: 'creeruncompte', component: CreerUncompteComponent }
    ]
  },
  {
    path: 'user',
    children: [
      { path: 'profile', component: UserListComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path: 'blog',
    children: [
      { path: 'listedeblogs', component: BlogListComponent, canActivate: [AuthGuard], },
      { path: 'pageblog', component: PageBlogComponent, canActivate: [AuthGuard],  },
      { path: 'pageblog/:id', component: PageBlogComponent, canActivate: [AuthGuard], },
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth/login'
  },
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
