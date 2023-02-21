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
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login'
  },
  {
    path: 'user', component: UserListComponent, canActivate: [AuthGuard],
  },
  {
    path: 'auth/login', component: LoginComponent, canActivate: [AuthLoginGuard],
  },
  {
    path: 'listedeblogs', component: BlogListComponent, canActivate: [AuthGuard],
  },
  {
    path: 'pageblog/:id', component: PageBlogComponent, canActivate: [AuthGuard],
  },
  {
    path: 'pageblog', component: PageBlogComponent, canActivate: [AuthGuard],
  },
  {
    path: 'creeruncompte', component: CreerUncompteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
