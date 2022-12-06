import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBlogComponent } from './pages/login/page-blog/page-blog.component';
import { LoginComponent } from './pages/login/login.component';
import { CreerUncompteComponent } from './creer-uncompte/creer-uncompte.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
  path:"",
  pathMatch:"full",
  redirectTo:"auth/login"
  },

  {
    path:"auth/login", component:LoginComponent,
  },

  {
    path : 'pageblog', component : PageBlogComponent,canActivate:[AuthGuard] 
  },

  {
    path : 'CreerUncompte', component : CreerUncompteComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
