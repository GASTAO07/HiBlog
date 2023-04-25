import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/guards/auth.guard/auth.guard';
import { AuthLoginGuard } from './core/auth/guards/auth-login.guard/auth-login.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () : any => import('./features/login/login.module').then((m : any) : any => m.AuthModule),
    canActivate: [AuthLoginGuard]
  },

  {
    path: 'user',
    loadChildren: () : any => import('./features/user/user.module').then((m : any) : any => m.UserModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'blog',
    loadChildren: () : any => import('./features/blog/blog-list.module').then((m : any) : any => m.BlogModule),
    canActivate: [AuthGuard]

  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth/login'
  },
  {
    path: '**',
    redirectTo: '/auth/login'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthLoginGuard]
})
export class AppRoutingModule { }
