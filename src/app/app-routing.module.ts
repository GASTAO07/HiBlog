import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBlogComponent } from './pages/login/page-blog/page-blog.component';
import { CreerUncompteComponent } from './creer-uncompte/creer-uncompte.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { BlogListComponent } from './blog-list/blog-list.component';
// import { EditPageComponent } from './edit-page/edit-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login'
  },

  {
    path: 'auth/login', component: LoginComponent,
  },

  {
    path: 'listdeblogs', component: BlogListComponent,
  },

  {
    path : 'pageblog', component : PageBlogComponent, canActivate: [AuthGuard]
  },

  {
    path : 'CreerUncompte', component : CreerUncompteComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
